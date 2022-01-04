import axios from "axios"
import React from "react"



const Search = () => {
    const [search, setsearch] = React.useState('')
    const [results, setresult] = React.useState()


    const searchbook = async (name) => {
        try {
            const query = name.split(" ").join('+')
            const api = await axios.get(`http://openlibrary.org/search.json?q=${query}`, {
            })
            setresult(api.data.docs)
        } catch (error) {
            console.error(error.message);

        }
    }

    React.useEffect(() => {
        if (search !== '')
            searchbook(search)
    }, [search])

    const ui = results?.map(ele =>

        <tr>
            <td>{ele.title}</td>
            <td>{ele.author_name ? ele.author_name : "N/A"}</td>
            <td>{ele.first_publish_year ? ele.first_publish_year : "N/A  "}</td>
        </tr>
    )
    return (
        <React.Fragment>
            <input type="search" placeholder="Search" value={search} onChange={(e) => setsearch(e.target.value)} autoFocus={true} />
            <h1>Search Result</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pub. Year</th>
                    </tr>
                </thead>
                <tbody>
                    {ui}
                </tbody>
            </table>

        </React.Fragment>
    )
}


export default Search

/**
 * author_facet: Array(1)
0: "OL2761571A NA"
length: 1
[[Prototype]]: Array(0)
author_key: Array(1)
0: "OL2761571A"
length: 1
[[Prototype]]: Array(0)
author_name: Array(1)
0: "NA"
length: 1
[[Prototype]]: Array(0)
cover_edition_key: "OL32479081M"
cover_i: 11134684
ebook_count_i: 0
edition_count: 1
edition_key: Array(1)
0: "OL32479081M"
length: 1
[[Prototype]]: Array(0)
first_publish_year: 2001
has_fulltext: false
isbn: (2) ['9780130765345', '0130765341']
key: "/works/OL24509399W"
last_modified_i: 1621550719
publish_date: ['Oct 01, 2001']
publish_year: [2001]
publisher: ['Addison Wesley Longman']
publisher_facet: ['Addison Wesley Longman']
seed: Array(3)
0: "/books/OL32479081M"
1: "/works/OL24509399W"
2: "/authors/OL2761571A"
length: 3
[[Prototype]]: Array(0)
title: "Chem&life"
title_suggest: "Chem&life"
type: "work"
_version_: 1715088258836201500
 */