import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { setPodcasts } from "../slices/podcastSlice";
import PodcastCard from "../components/Podcasts/PodcastCard";
import InputComponent from "../components/common/Input";
import Loader from "../components/common/Loader";
import "./PodcastsPage.css";

function PodcastsPage() {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcasts.podcasts);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "podcasts")),
      (querySnapshot) => {
        const podcastsData = [];
        querySnapshot.forEach((doc) => {
          podcastsData.push({ id: doc.id, ...doc.data() });
        });
        dispatch(setPodcasts(podcastsData));
        setLoading(false); // Set loading to false once data is fetched
      },
      (error) => {
        console.error("Error fetching podcasts:", error);
        setLoading(false); // Set loading to false in case of error
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  // Filter podcasts based on search input
  const filteredPodcasts = podcasts.filter((item) =>
    item.title.trim().toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="podcasts-page-container">
      <Header />
      <div className="podcasts-page-content">
        <h1>   Discover Podcasts</h1>
        <InputComponent className = "my-input"
          state={search}
          setState={setSearch}
          placeholder="Search By Title"
          type="text"
        />
        {loading ? (
          <Loader /> // Display loader while data is being fetched
        ) : filteredPodcasts.length > 0 ? (
          <div className="podcasts-flex">
            {filteredPodcasts.map((item) => (
              <PodcastCard
                key={item.id}
                id={item.id}
                title={item.title}
                displayImage={item.displayImage}
              />
            ))}
          </div>
        ) : (
          <p>{search ? "Podcast Not Found" : "No Podcasts On The Platform"}</p>
        )}
      </div>
    </div>
  );
}

export default PodcastsPage;
