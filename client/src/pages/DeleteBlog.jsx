import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const DeleteBlog = () => {
    const {id} = useParams;

    useEffect(() => {
        const removeBlog = async () => {
            try {
                const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)

            } catch (error) {
                console.log(error)
            }
        }

        removeBlog()
    }, [])


  return (
    <div></div>
  )
}

export default DeleteBlog