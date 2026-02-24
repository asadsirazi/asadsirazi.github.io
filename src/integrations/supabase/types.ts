export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      about_content: {
        Row: {
          created_at: string | null
          id: string
          key: string
          sort_order: number | null
          updated_at: string | null
          value_ar: string | null
          value_bn: string | null
          value_en: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          key: string
          sort_order?: number | null
          updated_at?: string | null
          value_ar?: string | null
          value_bn?: string | null
          value_en?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          key?: string
          sort_order?: number | null
          updated_at?: string | null
          value_ar?: string | null
          value_bn?: string | null
          value_en?: string | null
        }
        Relationships: []
      }
      certifications: {
        Row: {
          created_at: string | null
          grade_ar: string | null
          grade_bn: string | null
          grade_en: string | null
          id: string
          institute_ar: string | null
          institute_bn: string | null
          institute_en: string | null
          skills: Json | null
          sort_order: number | null
          title_ar: string | null
          title_bn: string | null
          title_en: string
          updated_at: string | null
          year_ar: string | null
          year_bn: string | null
          year_en: string | null
        }
        Insert: {
          created_at?: string | null
          grade_ar?: string | null
          grade_bn?: string | null
          grade_en?: string | null
          id?: string
          institute_ar?: string | null
          institute_bn?: string | null
          institute_en?: string | null
          skills?: Json | null
          sort_order?: number | null
          title_ar?: string | null
          title_bn?: string | null
          title_en?: string
          updated_at?: string | null
          year_ar?: string | null
          year_bn?: string | null
          year_en?: string | null
        }
        Update: {
          created_at?: string | null
          grade_ar?: string | null
          grade_bn?: string | null
          grade_en?: string | null
          id?: string
          institute_ar?: string | null
          institute_bn?: string | null
          institute_en?: string | null
          skills?: Json | null
          sort_order?: number | null
          title_ar?: string | null
          title_bn?: string | null
          title_en?: string
          updated_at?: string | null
          year_ar?: string | null
          year_bn?: string | null
          year_en?: string | null
        }
        Relationships: []
      }
      contact_methods: {
        Row: {
          color: string | null
          created_at: string | null
          hint_ar: string | null
          hint_bn: string | null
          hint_en: string | null
          icon_name: string | null
          id: string
          label: string
          link: string | null
          sort_order: number | null
          updated_at: string | null
          value: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          hint_ar?: string | null
          hint_bn?: string | null
          hint_en?: string | null
          icon_name?: string | null
          id?: string
          label?: string
          link?: string | null
          sort_order?: number | null
          updated_at?: string | null
          value?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          hint_ar?: string | null
          hint_bn?: string | null
          hint_en?: string | null
          icon_name?: string | null
          id?: string
          label?: string
          link?: string | null
          sort_order?: number | null
          updated_at?: string | null
          value?: string | null
        }
        Relationships: []
      }
      education: {
        Row: {
          created_at: string | null
          degree_ar: string | null
          degree_bn: string | null
          degree_en: string
          grade_ar: string | null
          grade_bn: string | null
          grade_en: string | null
          id: string
          institution_ar: string | null
          institution_bn: string | null
          institution_en: string | null
          sort_order: number | null
          updated_at: string | null
          year_ar: string | null
          year_bn: string | null
          year_en: string | null
        }
        Insert: {
          created_at?: string | null
          degree_ar?: string | null
          degree_bn?: string | null
          degree_en?: string
          grade_ar?: string | null
          grade_bn?: string | null
          grade_en?: string | null
          id?: string
          institution_ar?: string | null
          institution_bn?: string | null
          institution_en?: string | null
          sort_order?: number | null
          updated_at?: string | null
          year_ar?: string | null
          year_bn?: string | null
          year_en?: string | null
        }
        Update: {
          created_at?: string | null
          degree_ar?: string | null
          degree_bn?: string | null
          degree_en?: string
          grade_ar?: string | null
          grade_bn?: string | null
          grade_en?: string | null
          id?: string
          institution_ar?: string | null
          institution_bn?: string | null
          institution_en?: string | null
          sort_order?: number | null
          updated_at?: string | null
          year_ar?: string | null
          year_bn?: string | null
          year_en?: string | null
        }
        Relationships: []
      }
      experiences: {
        Row: {
          company_ar: string | null
          company_bn: string | null
          company_en: string | null
          created_at: string | null
          id: string
          location_ar: string | null
          location_bn: string | null
          location_en: string | null
          period_ar: string | null
          period_bn: string | null
          period_en: string | null
          responsibilities: Json | null
          sort_order: number | null
          title_ar: string | null
          title_bn: string | null
          title_en: string
          updated_at: string | null
        }
        Insert: {
          company_ar?: string | null
          company_bn?: string | null
          company_en?: string | null
          created_at?: string | null
          id?: string
          location_ar?: string | null
          location_bn?: string | null
          location_en?: string | null
          period_ar?: string | null
          period_bn?: string | null
          period_en?: string | null
          responsibilities?: Json | null
          sort_order?: number | null
          title_ar?: string | null
          title_bn?: string | null
          title_en?: string
          updated_at?: string | null
        }
        Update: {
          company_ar?: string | null
          company_bn?: string | null
          company_en?: string | null
          created_at?: string | null
          id?: string
          location_ar?: string | null
          location_bn?: string | null
          location_en?: string | null
          period_ar?: string | null
          period_bn?: string | null
          period_en?: string | null
          responsibilities?: Json | null
          sort_order?: number | null
          title_ar?: string | null
          title_bn?: string | null
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      gallery: {
        Row: {
          alt_text: string | null
          created_at: string | null
          id: string
          image_url: string
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          alt_text?: string | null
          created_at?: string | null
          id?: string
          image_url?: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          alt_text?: string | null
          created_at?: string | null
          id?: string
          image_url?: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string | null
          description_ar: string | null
          description_bn: string | null
          description_en: string | null
          id: string
          image_url: string | null
          link: string | null
          sort_order: number | null
          tags: Json | null
          title_ar: string | null
          title_bn: string | null
          title_en: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description_ar?: string | null
          description_bn?: string | null
          description_en?: string | null
          id?: string
          image_url?: string | null
          link?: string | null
          sort_order?: number | null
          tags?: Json | null
          title_ar?: string | null
          title_bn?: string | null
          title_en?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description_ar?: string | null
          description_bn?: string | null
          description_en?: string | null
          id?: string
          image_url?: string | null
          link?: string | null
          sort_order?: number | null
          tags?: Json | null
          title_ar?: string | null
          title_bn?: string | null
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      references_list: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          name_ar: string | null
          name_bn: string | null
          name_en: string
          organization_ar: string | null
          organization_bn: string | null
          organization_en: string | null
          phone: string | null
          position_ar: string | null
          position_bn: string | null
          position_en: string | null
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          name_ar?: string | null
          name_bn?: string | null
          name_en?: string
          organization_ar?: string | null
          organization_bn?: string | null
          organization_en?: string | null
          phone?: string | null
          position_ar?: string | null
          position_bn?: string | null
          position_en?: string | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          name_ar?: string | null
          name_bn?: string | null
          name_en?: string
          organization_ar?: string | null
          organization_bn?: string | null
          organization_en?: string | null
          phone?: string | null
          position_ar?: string | null
          position_bn?: string | null
          position_en?: string | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string | null
          id: string
          key: string
          updated_at: string | null
          value: Json
        }
        Insert: {
          created_at?: string | null
          id?: string
          key: string
          updated_at?: string | null
          value?: Json
        }
        Update: {
          created_at?: string | null
          id?: string
          key?: string
          updated_at?: string | null
          value?: Json
        }
        Relationships: []
      }
      skills: {
        Row: {
          created_at: string | null
          icon_name: string | null
          id: string
          skills: Json | null
          sort_order: number | null
          title_ar: string | null
          title_bn: string | null
          title_en: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          icon_name?: string | null
          id?: string
          skills?: Json | null
          sort_order?: number | null
          title_ar?: string | null
          title_bn?: string | null
          title_en?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          icon_name?: string | null
          id?: string
          skills?: Json | null
          sort_order?: number | null
          title_ar?: string | null
          title_bn?: string | null
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
