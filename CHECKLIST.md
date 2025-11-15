# ✅ PolisPraxis - Implementation Checklist

Χρησιμοποιήστε αυτό το checklist για να παρακολουθείτε την πρόοδό σας!

---

## 👨‍💻 DEVELOPER 1: Database & Projects API

### Phase 1: Supabase Setup (Hour 0-2)
- [ ] Έφτιαξα account στο Supabase.com
- [ ] Δημιούργησα νέο project
- [ ] Αντέγραψα URL και Anon Key στο `.env.local`
- [ ] Έτρεξα το `src/lib/database.sql` στο SQL Editor
- [ ] Έλεγξα ότι τα tables δημιουργήθηκαν (users, projects, pledges)
- [ ] Tested: Connection works από το `src/lib/supabase.ts`
- [ ] **COMMIT:** `"feat: setup supabase connection and database schema"`

### Phase 2: Authentication (Hour 2-4)
- [ ] Έφτιαξα `signUp()` function στο `useAuth.ts`
- [ ] Έφτιαξα `signIn()` function
- [ ] Έφτιαξα `signOut()` function
- [ ] Έφτιαξα `getCurrentUser()` function
- [ ] Πρόσθεσα role detection (citizen, volunteer, municipality)
- [ ] Tested: Μπορώ να κάνω signup/login
- [ ] **COMMIT:** `"feat: implement authentication system with user roles"`

### Phase 3: Projects API - Read (Hour 4-6)
- [ ] GET `/api/projects` επιστρέφει όλα τα projects
- [ ] Πρόσθεσα filter by status (?status=pending)
- [ ] Πρόσθεσα filter by category (?category=infrastructure)
- [ ] Πρόσθεσα pagination (?page=1&limit=10)
- [ ] GET `/api/projects/[id]` επιστρέφει ένα project
- [ ] Το single project περιλαμβάνει και τα pledges του
- [ ] Tested με cURL: `curl http://localhost:3000/api/projects`
- [ ] **COMMIT:** `"feat: implement projects read API endpoints"`

### Phase 4: Projects API - Write (Hour 6-8)
- [ ] POST `/api/projects` δημιουργεί νέο project
- [ ] Validation: title, description, category required
- [ ] Παίρνει user_id από Supabase auth
- [ ] Θέτει status='pending_approval' by default
- [ ] PATCH `/api/projects/[id]` ενημερώνει project
- [ ] Έλεγχος: Μόνο ο creator μπορεί να κάνει update
- [ ] DELETE `/api/projects/[id]` διαγράφει project
- [ ] Tested: Δημιούργησα project μέσω API
- [ ] **COMMIT:** `"feat: implement projects write API endpoints"`

### Phase 5: useProjects Hook
- [ ] `fetchProjects()` καλεί το GET API
- [ ] `createProject()` καλεί το POST API
- [ ] State management: projects, loading, error
- [ ] useEffect για auto-fetch
- [ ] Tested: Χρησιμοποίησα το hook σε component

---

## 👨‍💻 DEVELOPER 2: Pledges & Stats API

### Phase 1: Utilities & Helpers (Hour 0-2)
- [ ] `formatCurrency()` μετατρέπει 250 σε "€250" ✅ (υπάρχει)
- [ ] `formatTime()` μετατρέπει 10 σε "10 ώρες" (να φτιάξω)
- [ ] `calculatePledgeProgress()` υπολογίζει % completion
- [ ] `getStatusColor()` επιστρέφει Tailwind color classes
- [ ] `getStatusText()` επιστρέφει status στα ελληνικά
- [ ] `getCategoryIcon()` επιστρέφει emoji για categories
- [ ] Mock data: Έχω 5+ projects ✅ (υπάρχει)
- [ ] Mock data: Έχω 10+ pledges
- [ ] Tested: Όλες οι helper functions
- [ ] **COMMIT:** `"feat: implement utility functions and mock data"`

### Phase 2: Types & Validation (Hour 2-4)
- [ ] Types: Έλεγξα ότι όλα τα fields υπάρχουν ✅ (υπάρχουν)
- [ ] Έφτιαξα PledgeInput type (για POST requests)
- [ ] Έφτιαξα ProjectInput type
- [ ] Έφτιαξα ApiResponse<T> generic type
- [ ] Έφτιαξα validation για pledges (amount > 0, κλπ)
- [ ] Έφτιαξα error handling utilities
- [ ] Tested: TypeScript compiler ευχαριστημένος
- [ ] **COMMIT:** `"feat: add type definitions and validation"`

### Phase 3: Pledges API (Hour 4-6) 🎯 THE WOW FACTOR!
- [ ] POST `/api/pledges` δημιουργεί pledge
- [ ] Support για type='money' με amount
- [ ] Support για type='time' με hours
- [ ] Support για type='materials' με description
- [ ] Validation: Έλεγχος amount/hours > 0
- [ ] Παίρνει user_id από Supabase auth
- [ ] UPDATE το project: pledged_money += amount
- [ ] UPDATE το project: pledged_hours += hours
- [ ] UPDATE το project: pledged_materials += 1
- [ ] GET `/api/pledges?projectId=xxx` επιστρέφει pledges
- [ ] Filter by user_id αν χρειάζεται
- [ ] Tested με cURL: Δημιούργησα pledge
- [ ] **COMMIT:** `"feat: implement pledges API - create and read"`

### Phase 4: Stats & Real-time (Hour 6-8) 🚀
- [ ] GET `/api/pledges/stats?projectId=xxx` επιστρέφει totals
- [ ] Υπολογίζει: total_money (SUM of amounts)
- [ ] Υπολογίζει: total_hours (SUM of hours)
- [ ] Υπολογίζει: total_materials (COUNT)
- [ ] Υπολογίζει: pledge_count (total pledges)
- [ ] Υπολογίζει: progress_percentage ((money/budget)*100)
- [ ] Breakdown: money_pledges, time_pledges, materials_pledges counts
- [ ] Έφτιαξα `usePledges()` hook
- [ ] Hook: fetchPledges(), createPledge(), fetchStats()
- [ ] BONUS: Supabase real-time subscriptions
- [ ] BONUS: Counter ανανεώνεται αυτόματα
- [ ] Tested: Stats calculator works
- [ ] **COMMIT:** `"feat: implement pledge statistics and real-time updates"`

---

## 🤝 BOTH DEVELOPERS: Municipality Features (Hour 8-10)

### Municipality Approval System
- [ ] POST `/api/municipality/approve` endpoint
- [ ] Έλεγχος: User έχει role='municipality'
- [ ] action='approve': UPDATE status='approved'
- [ ] action='reject': UPDATE status='rejected'
- [ ] Πρόσθεσε municipality_notes (comment)
- [ ] Πρόσθεσε municipality_funding (optional co-funding)
- [ ] Tested: Approval flow works
- [ ] **COMMIT:** `"feat: implement municipality approval system"`

### Municipality Dashboard Stats
- [ ] GET `/api/municipality/stats` endpoint
- [ ] Υπολογίζει: total projects
- [ ] Υπολογίζει: pending approvals
- [ ] Υπολογίζει: active projects
- [ ] Υπολογίζει: completed projects
- [ ] Υπολογίζει: total municipality funding
- [ ] Tested: Dashboard stats correct
- [ ] **COMMIT:** `"feat: add municipality dashboard statistics"`

---

## 🎨 BONUS Features (If Time Permits)

### Real-time Features
- [ ] Supabase real-time για pledges
- [ ] Live counter updates
- [ ] Live project status changes
- [ ] Notifications όταν project εγκριθεί

### Advanced Features
- [ ] Upload images για projects
- [ ] Project comments/updates
- [ ] Email notifications
- [ ] Project search με full-text
- [ ] Map με clustering

---

## 🧪 Final Testing Checklist

### API Testing
- [ ] Όλα τα endpoints επιστρέφουν data
- [ ] Error handling: 404, 400, 401 works
- [ ] Validation: Αποτυγχάνει με invalid data
- [ ] Authentication: Protected routes need auth

### Integration Testing
- [ ] Δημιουργώ project → εμφανίζεται στη λίστα
- [ ] Κάνω pledge → ανανεώνονται τα stats
- [ ] Municipality approve → αλλάζει το status
- [ ] Real-time updates work

### Edge Cases
- [ ] Τι γίνεται αν project_id δεν υπάρχει;
- [ ] Τι γίνεται αν user δεν είναι logged in;
- [ ] Τι γίνεται αν amount = 0;
- [ ] Τι γίνεται αν pledge > budget_needed;

---

## 📦 Deployment Checklist

### Pre-deployment
- [ ] Όλα τα environment variables στο `.env.local`
- [ ] No console.logs στον production code
- [ ] No hardcoded URLs (χρησιμοποίησε env vars)
- [ ] TypeScript compiles χωρίς errors
- [ ] ESLint warnings fixed

### Vercel Deployment
- [ ] Push κώδικα στο GitHub
- [ ] Connect Vercel με το repo
- [ ] Add environment variables στο Vercel
- [ ] Deploy & test production URL
- [ ] Check Supabase production keys (όχι dev!)

---

## 🏆 Demo Preparation

### Demo Data
- [ ] 10+ mock projects (διάφορα status)
- [ ] 20+ mock pledges
- [ ] 3+ mock users (citizen, volunteer, municipality)
- [ ] Realistic Greek names & locations

### Demo Script
- [ ] Show: Citizen δημιουργεί project
- [ ] Show: Volunteer κάνει pledge (WOW MOMENT!)
- [ ] Show: Real-time counter update
- [ ] Show: Municipality approves
- [ ] Show: Dashboard με statistics

### Presentation
- [ ] Slides έτοιμες
- [ ] Live demo working
- [ ] Backup video (αν χαλάσει το WiFi!)
- [ ] Practice pitch (3 minutes max)

---

## ✅ Final Success Criteria

Στο τέλος του hackathon πρέπει να έχετε:

### Technical
- [ ] 8+ working API endpoints
- [ ] Authentication system
- [ ] Database με real data
- [ ] Real-time pledge counter (WOW!)
- [ ] TypeScript, no errors
- [ ] Deployed στο Vercel

### Demo
- [ ] Live demo works
- [ ] Εντυπωσιακό WOW moment
- [ ] Όλοι οι judges καταλαβαίνουν το concept
- [ ] No bugs κατά τη demo

### Documentation
- [ ] README με screenshots
- [ ] API documentation
- [ ] Setup instructions
- [ ] Team credits

---

## 🎯 Progress Tracking

Συμπληρώστε όσο δουλεύετε:

**Developer 1 Progress:** ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 0/10  
**Developer 2 Progress:** ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 0/10  
**Together Progress:** ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 0/10

**OVERALL:** 0% Complete

---

**Καλή επιτυχία! Πάμε να κερδίσουμε! 🚀🏆**
