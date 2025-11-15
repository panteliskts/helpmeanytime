// Database schema for Supabase

/*
Run these SQL commands in Supabase SQL Editor to set up the database:

-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT CHECK (role IN ('citizen', 'volunteer', 'business', 'municipality')),
  avatar TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  status TEXT DEFAULT 'pending_approval',
  location JSONB NOT NULL,
  creator_id UUID REFERENCES public.profiles(id),
  budget_needed DECIMAL(10,2) DEFAULT 0,
  budget_pledged DECIMAL(10,2) DEFAULT 0,
  images TEXT[],
  municipality_approved BOOLEAN DEFAULT false,
  municipality_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Pledges table
CREATE TABLE public.pledges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id),
  type TEXT CHECK (type IN ('time', 'money', 'materials')),
  amount DECIMAL(10,2),
  hours INTEGER,
  materials TEXT,
  description TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pledges ENABLE ROW LEVEL SECURITY;

-- Policies (simplified for MVP)
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Projects are viewable by everyone" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create projects" ON public.projects FOR INSERT WITH CHECK (auth.uid() = creator_id);

CREATE POLICY "Pledges viewable by project participants" ON public.pledges FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create pledges" ON public.pledges FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_projects_category ON public.projects(category);
CREATE INDEX idx_pledges_project ON public.pledges(project_id);
CREATE INDEX idx_pledges_user ON public.pledges(user_id);

*/
