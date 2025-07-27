// Mock data functions replacing GraphQL queries
import {
  getTagsList,
  getTagByName,
  searchTagWithLimit,
  getPostById,
  getPostWithLimit,
  getPostByTagIdWithLimitPaging,
  insertTag,
  deleteTag
} from '../lib/mockData'

export const GET_TAGS_LIST = getTagsList
export const GET_TAG_BY_NAME = getTagByName
export const SEARCH_TAGS = searchTagWithLimit
export const CREATE_TAG = insertTag
export const DELETE_TAG = deleteTag
export const GET_POST_BY_ID = getPostById
export const GET_EX_POSTS_BY_TAG_ID_LIMIT = getPostByTagIdWithLimitPaging
export const GET_POST_WITH_LIMIT = getPostWithLimit
