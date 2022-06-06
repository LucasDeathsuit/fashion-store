import React, { useEffect, useState } from 'react'
import { getCommentData } from './APIServices/APIServices'
import Comment from './Comment'

export default function CommentSection({ quantity }) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setComments(await getCommentData(quantity));
            } catch (err) {
                console.log(err)
            }
        }

        fetchData();

    }, [quantity])


    return (
        <>
            {
                comments.map((comment, index) => {
                    return <Comment key={index} comment={comment} />
                })
            }
        </>
    )
}