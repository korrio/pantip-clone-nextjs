// Re-export types from mock data for backward compatibility
import { Tag, Post, Comment, Vote, Announcement, Category } from './lib/mockData'

// Legacy type aliases for existing code
type Topic = Post
type Comemnt = Comment // Note: keeping the typo for existing code compatibility

// Additional legacy types
type Count = {
  count: number
}
type SearchTag = {
  tag: string
  id: string
}
