# PolisPraxis Backend Development - Task Board

## 🎯 Git Workflow Strategy

### Branch Structure
```
main
├── dev/database-auth (Developer 1)
├── dev/pledges-api (Developer 2)
└── dev/municipality (Both merge here)
```

### Git Commands για κάθε developer:
```bash
# Developer 1
git checkout -b dev/database-auth
# Work, commit, push
git push origin dev/database-auth

# Developer 2  
git checkout -b dev/pledges-api
# Work, commit, push
git push origin dev/pledges-api
```

---

## 👨‍💻 DEVELOPER 1: Database & Projects API

### ⏰ Hour 0-2: Supabase Setup
- [ ] Create Supabase project at https://supabase.com
- [ ] Copy credentials to `.env.local`
- [ ] Test connection in `src/lib/supabase.ts`
- [ ] Create database tables from `src/lib/database.sql`

**Files to edit:**
- `src/lib/supabase.ts`
- `.env.local` (create from .env.example)

**Commit:** "feat: setup supabase connection and database schema"

---

### ⏰ Hour 2-4: Authentication System
- [ ] Implement Supabase Auth in `src/lib/supabase.ts`
- [ ] Create `useAuth` hook with login/logout/signup
- [ ] Add user role detection (citizen, volunteer, municipality)
- [ ] Test auth flow

**Files to edit:**
- `src/hooks/useAuth.ts` (create)
- `src/lib/supabase.ts` (add auth helpers)

**Commit:** "feat: implement authentication system with user roles"

---

### ⏰ Hour 4-6: Projects API - Read Operations
- [ ] GET `/api/projects` - List all projects
  - [ ] Add filters: status, category, location
  - [ ] Add pagination
  - [ ] Add sorting
- [ ] GET `/api/projects/[id]` - Single project with pledges

**Files to edit:**
- `src/app/api/projects/route.ts`
- `src/app/api/projects/[id]/route.ts`

**Commit:** "feat: implement projects read API endpoints"

---

### ⏰ Hour 6-8: Projects API - Write Operations
- [ ] POST `/api/projects` - Create project
  - [ ] Validate required fields
  - [ ] Check user authentication
  - [ ] Set initial status to 'pending'
- [ ] PATCH `/api/projects/[id]` - Update project
- [ ] DELETE `/api/projects/[id]` - Delete project

**Files to edit:**
- `src/app/api/projects/route.ts`
- `src/app/api/projects/[id]/route.ts`
- `src/hooks/useProjects.ts`

**Commit:** "feat: implement projects write API endpoints"

---

## 👨‍💻 DEVELOPER 2: Pledges & Municipality API

### ⏰ Hour 0-2: Utilities & Helpers Setup
- [ ] Complete helper functions in `src/utils/helpers.ts`
  - [ ] `calculatePledgeProgress()`
  - [ ] `formatCurrency()`
  - [ ] `formatTime()`
  - [ ] `getStatusColor()`
- [ ] Create comprehensive mock data in `src/lib/mockData.ts`
- [ ] Test all helper functions

**Files to edit:**
- `src/utils/helpers.ts`
- `src/lib/mockData.ts`
- `src/lib/constants.ts`

**Commit:** "feat: implement utility functions and mock data"

---

### ⏰ Hour 2-4: Types & Validation
- [ ] Refine TypeScript types in `src/types/index.ts`
- [ ] Add validation schemas for pledges
- [ ] Create error handling utilities
- [ ] Add TypeScript interfaces for API responses

**Files to edit:**
- `src/types/index.ts`
- `src/utils/validation.ts` (create)

**Commit:** "feat: add type definitions and validation"

---

### ⏰ Hour 4-6: Pledges API - Core (THE WOW FACTOR!)
- [ ] POST `/api/pledges` - Create pledge
  - [ ] Support 3 types: time, money, materials
  - [ ] Validate pledge amount/hours
  - [ ] Link to project_id and user_id
- [ ] GET `/api/pledges` - List pledges
  - [ ] Filter by project_id
  - [ ] Filter by user_id
  - [ ] Group by type

**Files to edit:**
- `src/app/api/pledges/route.ts`

**Commit:** "feat: implement pledges API - create and read"

---

### ⏰ Hour 6-8: Pledges Stats & Real-time Counter
- [ ] GET `/api/pledges/stats?projectId=x` - Calculate totals
  - [ ] Total money pledged
  - [ ] Total hours pledged
  - [ ] Total materials count
  - [ ] Progress percentage
- [ ] Create `usePledges` hook
- [ ] Implement real-time updates (Supabase subscriptions)

**Files to edit:**
- `src/app/api/pledges/stats/route.ts` (create)
- `src/hooks/usePledges.ts` (create)

**Commit:** "feat: implement pledge statistics and real-time updates"

---

## 🤝 BOTH DEVELOPERS (Hour 8-10): Municipality Features

Work together on video call or same location:

### Tasks:
- [ ] POST `/api/municipality/approve`
  - [ ] Change project status to 'approved' or 'rejected'
  - [ ] Add municipality comment
  - [ ] Send notification to project creator
- [ ] GET `/api/municipality/stats`
  - [ ] Total projects pending
  - [ ] Total projects approved
  - [ ] Total municipality funding
- [ ] PATCH `/api/municipality/cofund`
  - [ ] Add municipality funding to project
  - [ ] Update project budget

**Files to edit:**
- `src/app/api/municipality/approve/route.ts`
- `src/app/api/municipality/stats/route.ts`
- `src/app/api/municipality/cofund/route.ts` (create)

**Commit:** "feat: implement municipality approval and co-funding system"

---

## 📊 Progress Tracking

### Developer 1 Progress:
- [ ] Database Setup (2h)
- [ ] Auth System (2h)  
- [ ] Projects Read API (2h)
- [ ] Projects Write API (2h)

### Developer 2 Progress:
- [ ] Utilities & Helpers (2h)
- [ ] Types & Validation (2h)
- [ ] Pledges Core API (2h)
- [ ] Pledges Stats (2h)

### Together:
- [ ] Municipality Features (2h)

---

## 🚨 Critical Rules

1. **No merge conflicts**: Work on separate files!
2. **Commit often**: Every feature = 1 commit
3. **Test before commit**: Make sure API works
4. **Use Postman/Insomnia**: Test all endpoints
5. **Document APIs**: Add comments to explain logic

---

## 🔥 API Testing Checklist

Use this to test your endpoints:

### Projects API (Dev 1)
```bash
# GET all projects
curl http://localhost:3000/api/projects

# GET single project
curl http://localhost:3000/api/projects/1

# POST new project
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Project","description":"Test"}'
```

### Pledges API (Dev 2)
```bash
# POST new pledge
curl -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{"project_id":1,"type":"money","amount":50}'

# GET pledge stats
curl http://localhost:3000/api/pledges/stats?projectId=1
```

---

## 💡 Pro Tips

1. **Use Mock Data First**: Don't wait for database - use mockData.ts
2. **API-First Development**: Backend first, then connect to frontend
3. **Error Handling**: Always return proper HTTP status codes
4. **TypeScript**: Let types guide you - if it compiles, it probably works
5. **Console Logs**: Add them everywhere during development

---

## 🎯 Success Metrics

By Hour 10, you should have:
- ✅ 5+ API endpoints working
- ✅ Authentication system ready
- ✅ Pledge system (WOW factor) functional
- ✅ Municipality approval flow working
- ✅ Real-time pledge counter working

**Ready to win the hackathon! 🏆**
