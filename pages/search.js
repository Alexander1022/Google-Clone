import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results })
{   
    const router = useRouter();
    console.log(results);
    return <div>
        <Head>
            <title>
               {router.query.term} - Google Search
            </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <SearchResults results={results} />
    </div>
}

export default Search;

export async function getServerSideProps(context)
{
    const useData = false;
    const startIndex = context.query.start || "0";

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?/key=${API_KEY}&cx=${CONTEXT_KEY}0&q=${context.query.term}&start=${startIndex}`)
    .then(response => response.json());

    return {
        props: {
            results: data,
        },
    }; 
}