export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contributors: {
        Row: {
          author: boolean
          name: string
          profileSlug: string
        }
        Insert: {
          author?: boolean
          name: string
          profileSlug: string
        }
        Update: {
          author?: boolean
          name?: string
          profileSlug?: string
        }
        Relationships: [
          {
            foreignKeyName: "contributors_profileSlug_fkey"
            columns: ["profileSlug"]
            referencedRelation: "profiles"
            referencedColumns: ["slug"]
          },
          {
            foreignKeyName: "contributors_profileSlug_fkey"
            columns: ["profileSlug"]
            referencedRelation: "profiles_by_addon"
            referencedColumns: ["slug"]
          }
        ]
      }
      files: {
        Row: {
          name: string
          profileSlug: string
          profileVariant: string
        }
        Insert: {
          name: string
          profileSlug: string
          profileVariant: string
        }
        Update: {
          name?: string
          profileSlug?: string
          profileVariant?: string
        }
        Relationships: [
          {
            foreignKeyName: "files_profileSlug_fkey"
            columns: ["profileSlug"]
            referencedRelation: "profiles"
            referencedColumns: ["slug"]
          },
          {
            foreignKeyName: "files_profileSlug_fkey"
            columns: ["profileSlug"]
            referencedRelation: "profiles_by_addon"
            referencedColumns: ["slug"]
          }
        ]
      }
      profiles: {
        Row: {
          airport: string
          airportCreator: string
          created_at: string
          description: string | null
          requiresAirportVersion: string | null
          slug: string
          updated_at: string
          version: string
        }
        Insert: {
          airport: string
          airportCreator: string
          created_at?: string
          description?: string | null
          requiresAirportVersion?: string | null
          slug: string
          updated_at?: string
          version: string
        }
        Update: {
          airport?: string
          airportCreator?: string
          created_at?: string
          description?: string | null
          requiresAirportVersion?: string | null
          slug?: string
          updated_at?: string
          version?: string
        }
        Relationships: []
      }
    }
    Views: {
      distinct_airport_addons: {
        Row: {
          airport: string | null
          airportCreator: string | null
        }
        Relationships: []
      }
      profiles_by_addon: {
        Row: {
          airport: string | null
          airportCreator: string | null
          description: string | null
          names: string | null
          requiresAirportVersion: string | null
          slug: string | null
          variants: string | null
          version: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
