// Mock data functions replacing GraphQL mutations
import {
  insertTag,
  insertPost,
  createComment,
  insertVote,
  deleteVote,
  insertVoteComment
} from '../lib/mockData'

export const CREATE_TAG = insertTag
export const CREATE_POST = insertPost
export const CREATE_COMMENT = createComment
export const CREATE_VOTE_BY_ID = insertVote
export const DELETE_VOTE_BY_ID = deleteVote
export const CREATE_VOTE_BY_CM_ID = insertVoteComment
