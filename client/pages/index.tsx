import React from 'react';
import PodcastItem from "@/components/podcast_item/podcast_item";
import Tabs from "@/components/tabs/tabs";
import AuthorItem from "@/components/author_item/author_item";
import Header from "@/components/header/header";
import {useRouter} from "next/router";


export default function Home() {
    const router = useRouter();

    return (
        <section className="home">
            <Header pathname={router.pathname}/>

            <div className="home__header">
                <PodcastItem status={true} type={'rectangle'}/>
            </div>
            <div className="home__container">

                <div className="home__content">

                    <div className="home__content-title">
                        Listen podcasts
                    </div>
                    <Tabs/>
                    <div className="home__content-slider">
                        <PodcastItem type={'square'}/>
                        <PodcastItem type={'square'}/>
                        <PodcastItem type={'square'}/>
                    </div>
                </div>
                <div className="home__authors">
                    <Tabs/>
                    <div className="home__authors-content">

                        <AuthorItem/>

                    </div>
                </div>
            </div>
        </section>
    );
}

/*export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    export const fetchTracks = () => {
         return async (dispatch: Dispatch<TrackAction>) => {
             try {
                 const response = await axios.get('http://localhost:5000/tracks')
                 dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
             } catch (e) {
                 dispatch({
                     type: TrackActionTypes.FETCH_TRACKS_ERROR,
                     payload: 'Произошла ошибка при загрузке треков'})
             }
         }
     }
     await dispatch(await fetchTracks())
})
*/