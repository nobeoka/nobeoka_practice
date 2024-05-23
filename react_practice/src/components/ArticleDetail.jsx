import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookMarkButton } from "../components/BookMarkButton";
import { API_URL } from "../lib/client";
import { Loading } from "../components/Loading";
import axios from "axios";
import { addClip, deleteClip } from "../store/clipSlice";
import { useDispatch, useSelector } from "react-redux";

export const ArticleDetail = () => {

    const [filterArticle, setFilterArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const currentPath = location.pathname.substring(9);

    //クリップ記事の情報を取得
    const dispatch = useDispatch();
    const clips = useSelector((state) => state.clip.clips);
    const isEnable = clips.some((clip) => clip.publishedAt === currentPath);

    //記事がクリップされている時とそうでない時に、呼ぶreducerを変える
    const ArticleClip = () => {
        if (isEnable) {
            dispatch(deleteClip(filterArticle));
        } else {
            dispatch(addClip(filterArticle));
        }
    };

    //記事がクリップされている時とそうでない時とでアイコンの色を変える
    const bookMarkButtonStyle = isEnable ? "orange" : "black";

    //記事の詳細情報を取得する処理
    useEffect(() => {
        const fetchNewLists = async () => {
            try {
                const response = await axios.get(API_URL);
                const articles = response.date.articles;
                const filteredArticle = articles.find(
                    (article: Article) => article.publishedAt === currentPath
                );
                if (filteredArticle) {
                    setFilterArticle(filteredArticle);
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching news:", error);
                setLoading(false);
            }
         };
            fetchNewsLists();
}, [currentPath]);

         if(loading) {
            return <Loading />;
         }

         if(!filterArticle) {
            return <div>記事が見つかりませんでした。</div>;
         }

         return(
            <div className="container mx-auto py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <div className="mb-10">
                        <BookMarkButton
                        iconStyle={bookMarkButtonStyle}
                        ArticleClip={ArticleClip}
                        />
                    </div>
                    <h1 className="text-3xl font-semibold mb-4">{filterArticle.title}</h1>
                    <p className="text-gray-500 mb-4">著者: {filterArticle.author}</p>
                    <img
                    src={filterArticle.urlToImage}
                    alt={filterArticle.title}
                    className="w-full rounded-lg mb-4"
                    />
                    <p className="text-gray-700 mt-10 mb-5">{filterArticle.description}</p>

                    <span className="text-bule-500">
                        <Link to={filterArticle.url}>続きはこちら→</Link>
                    </span>
                </div>
            </div>
         );
 
        };