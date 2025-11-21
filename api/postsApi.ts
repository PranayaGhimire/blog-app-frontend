import { IPosts } from "@/types/postsType";
import { axiosInstance } from "@/utils/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetPosts = () =>
    useQuery({
        queryKey:['posts'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/posts`);
            return response.data;
        }
    })

export const useGetPost = (id:string) =>
    useQuery({
        queryKey:['posts',id],
        queryFn: async () => {
            const response = await axiosInstance.get(`/posts/${id}`);
            return response.data;
        }
    })

export const useCreatePost = () => 
    useMutation({
        mutationFn: async (data:IPosts) => {
            const response = await axiosInstance.post(`/posts`,data);
            return response.data;
        }
    })

export const useUpdatePost = () =>
    useMutation({
        mutationFn: async ({id,data}:{id:string,data:IPosts}) => {
            const response = await axiosInstance.post(`/posts/${id}`,data);
            return response.data;
        }
    })

export const useDeletePost = () =>
    useMutation({
        mutationFn: async (id:string) => {
            const response = await axiosInstance.delete(`/posts/${id}`);
            return response.data;
        }
    })