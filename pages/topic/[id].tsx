import { ChatAlt2Icon } from '@heroicons/react/outline'
import {
  ChatIcon,
  EmojiHappyIcon,
  LinkIcon,
  PhotographIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReactTimeago from 'react-timeago'
import { GET_POST_BY_ID } from '../../graphql/quereis'
import tags from '../tags'
import parse from 'html-react-parser'
import { convertToTopic } from '../../utils/tools'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import {
  CREATE_COMMENT,
  CREATE_VOTE_BY_CM_ID,
  CREATE_VOTE_BY_ID,
  DELETE_VOTE_BY_ID,
} from '../../graphql/mutation'
import { NextSeo } from 'next-seo'
import { Post, Comment, Vote } from '../../lib/mockData'

type Props = {
  id: string
  topic: Post
}
type FormData = {
  body: string
}
function Topic({ id, topic: initialTopic }: Props) {
  const [topic, setTopic] = useState<Post>(initialTopic)
  const [loading, setLoading] = useState(false)

  // Refresh topic data
  const refreshTopic = async () => {
    try {
      const { getPostById } = await GET_POST_BY_ID(id)
      if (getPostById) {
        setTopic(getPostById)
      }
    } catch (error) {
      console.error('Error refreshing topic:', error)
    }
  }

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>()
  // Removed authentication - now using mock user data
  const mockUser = {
    name: 'ผู้ใช้งาน',
    email: 'user@example.com'
  }

  const onVoteComment = async (comment: Comment) => {
    const email = mockUser.email

    try {
      if (comment.votes.find((v) => v.email === email)) {
        // Already voted - could implement unvote here
      } else {
        await CREATE_VOTE_BY_CM_ID(comment.id, email)
        await refreshTopic()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onVotePost = async () => {
    const email = mockUser.email

    try {
      if (topic.votes.find((v) => v.email === email)) {
        // Already voted - could implement unvote here
      } else {
        await CREATE_VOTE_BY_ID(id, email)
        await refreshTopic()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = handleSubmit(async (formdata) => {
    const notification = toast.loading('กำลังสร้างคอมเมนต์..')
    try {
      await CREATE_COMMENT({
        body: formdata.body,
        post_id: id,
        username: mockUser.name,
        email: mockUser.email,
      })

      setValue('body', '')
      await refreshTopic()
      toast.success('สร้างคอมเมนต์เรียบร้อยแล้ว', { id: notification })
    } catch (error) {
      toast.error('ไม่สามารถสร้างคอมเเมนต์', { id: notification })
    }
  })
  const rawBody = convertToTopic(topic?.body ?? '')
  return (
    <div className=" mx-auto mt-8 flex max-w-4xl flex-col space-y-4 ">
      <NextSeo title={`${topic.title} - Pantip`} />

      <div className=" flex flex-col space-y-4 border border-gray-300 bg-[#193365] p-6 shadow-inner">
        <div className=" flex space-x-2">
          <StarIcon className=" mt-1 h-6 w-6 text-[#949dad]" />
          <h2 className="flex-1 text-2xl font-bold text-yellow-400">
            {topic?.title}
          </h2>
        </div>
        <div className="flex flex-col space-y-6 px-7">
          <div className=" flex justify-between">
            <Link href={`/tag/${topic?.tag?.tag}`}>
              <p className=" cursor-pointer border-[1px] border-[#254b8b] bg-[#0e2d61] px-2  py-1 text-sm text-gray-300 hover:bg-[#e0d254]  hover:text-black">
                {topic?.tag?.tag}
              </p>
            </Link>
            <div className=" flex items-center space-x-1">
              <ChatAlt2Icon className=" h-5 w-5 text-yellow-400" />
              <p className=" text-sm text-white">กระทู้สนทนา</p>
            </div>
          </div>
          <div className=" flex ">
            <div className="w-full text-white lg:w-4/6">{parse(rawBody)}</div>
          </div>
          <div className=" mt-6 flex items-center space-x-3 ">
            <div className="flex items-center space-x-2">
              <p className=" text-3xl font-bold text-[#486684]">
                {topic?.votes?.length}
              </p>{' '}
              <PlusIcon
                className=" h-7 w-7 cursor-pointer text-3xl font-bold text-[#374b7a]"
                onClick={onVotePost}
              />
            </div>
            <div className="flex h-6 items-center space-x-2 border-r border-[#374b7a] pr-4">
              <EmojiHappyIcon className=" text-md h-5 w-5  text-[#374b7a]" />
              <p className=" text-xl font-bold text-[#486684]">0</p>
            </div>
            <div className=" flex space-x-2">
              <img
                src={`https://avatars.dicebear.com/api/open-peeps/${
                  topic?.email || 'placeholder'
                }.svg`}
                alt=""
                className=" h-8 w-8"
              />
              <div className=" text-sm font-light leading-[16px] text-[#5d9dd1]">
                <p>{topic?.username}</p>
                <p className=" ">{<ReactTimeago date={topic?.created_at} />}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className=" flex items-center space-x-3">
          <hr className="w-8 text-[#b8b0d3] opacity-20" />
          <div className=" flex items-center space-x-2 text-[#c4bed8]">
            <ChatIcon className="h-5 w-5" />
            <p className=" text-sm">แสดงความคิดเห็น</p>
          </div>
          <hr className="w-8 flex-1 text-[#b8b0d3] opacity-20" />{' '}
        </div>
        <div className=" border border-[#686595] bg-[#083a43] px-14 pt-2">
            <form onSubmit={onSubmit}>
              <div className="bg-[#0e5c6a] ">
                <textarea
                  {...register('body', {
                    required: true,
                    minLength: 5,
                  })}
                  className="h-[120px] w-full overflow-y-auto border-[2px] border-[#395a97] bg-[#0e5c6a] p-2 outline-none"
                ></textarea>
              </div>
              {errors?.body && (
                <p className="text-[11px] text-yellow-200">
                  *กรุณาเขียนเนื้อหาคอมเเมนต์อย่างน้อย 5 ตัวอักษร
                </p>
              )}
              <div className=" flex space-x-6 py-2">
                <button
                  type="submit"
                  className=" rounded-sm border-2 border-violet-800 bg-[#55832e] px-2 py-1 text-sm shadow-inner  shadow-yellow-100 hover:bg-[#50752f]"
                >
                  ส่งข้อความ
                </button>
                <div className=" flex items-center space-x-2 text-[12px] text-white">
                  <img
                    src={`https://avatars.dicebear.com/api/open-peeps/${
                      mockUser.email || 'placeholder'
                    }.svg`}
                    alt=""
                    className=" h-5 w-5 border border-gray-400"
                  />
                  <p>{mockUser.name} </p>
                </div>
              </div>
            </form>
        </div>
        <div className=" flex items-center space-x-3">
          <hr className="w-8 text-[#b8b0d3] opacity-20" />
          <div className=" flex items-center space-x-2 text-[#c4bed8]">
            <ChatIcon className="h-5 w-5" />
            <p className=" text-sm">
              {topic?.comments?.length ?? 0} ความคิดเห็น
            </p>
          </div>
          <hr className="w-8 flex-1 text-[#b8b0d3] opacity-20" />{' '}
        </div>

        <div className=" flex flex-col space-y-3">
          {topic?.comments?.map((comment, i) => (
            <div className=" flex flex-col space-y-4 border border-gray-400 bg-[#222244] px-8 py-2">
              <p className=" text-sm text-gray-500">ความคิดเห็นที่ {i + 1}</p>
              <p className=" text-gray-400">{comment.body}</p>
              <div className=" mt-6 flex items-center space-x-3 text-[#4d4d67] ">
                <div className="flex items-center space-x-2 ">
                  <p className=" text-2xl font-bold ">{comment.votes.length}</p>{' '}
                  <PlusIcon
                    className=" h-7 w-7 cursor-pointer text-2xl font-bold text-[#3e3d5e]"
                    onClick={() => onVoteComment(comment)}
                  />
                </div>
                <div className="flex h-6 items-center space-x-2 border-r border-[#3e3d5e] pr-4">
                  <EmojiHappyIcon className=" text-md h-4 w-4  text-[#4d4d67]" />
                  <p className=" text-lg font-bold text-[#3e3d5e]">0</p>
                </div>
                <div className=" flex space-x-2">
                  <img
                    src={`https://avatars.dicebear.com/api/open-peeps/${
                      comment.email || 'placeholder'
                    }.svg`}
                    alt=""
                    className=" h-8 w-8"
                  />
                  <div className=" text-[12px] font-light leading-[16px] text-[#2f6099] ">
                    <p>{comment.username}</p>
                    <p className=" ">
                      {<ReactTimeago date={comment.created_at} />}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getPostById } = await GET_POST_BY_ID(String(context.query.id))
  if (!getPostById) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: { topic: getPostById, id: context.query.id },
  }
}

export default Topic
