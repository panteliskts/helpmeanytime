# 🎯 PolisPraxis - Quick Start Guide για Backend Developers

## 📋 Τι έχει ήδη φτιαχτεί;

✅ **Πλήρης δομή project** - Όλοι οι φάκελοι και τα αρχεία  
✅ **Package.json** - Όλα τα dependencies  
✅ **TypeScript Types** - Project, User, Pledge  
✅ **Mock Data** - Έτοιμα για testing  
✅ **Database Schema** - SQL ready στο `src/lib/database.sql`  
✅ **API Routes Structure** - Skeleton με οδηγίες  
✅ **Helper Functions** - Μερικά έτοιμα, μερικά να συμπληρώσεις  

## 🚀 Βήματα για να ξεκινήσετε (5 λεπτά)

### 1️⃣ Clone & Install
```bash
git clone <your-repo-url>
cd helpmeanytime
npm install
```

### 2️⃣ Setup Environment
```bash
cp .env.example .env.local
```

Στο `.env.local` βάλε:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### 3️⃣ Run Development Server
```bash
npm run dev
```

Άνοιξε: http://localhost:3000

---

## 👥 Διαχωρισμός Εργασίας

### **Developer 1: "Mr. Projects & Auth"**
**Branch:** `dev/database-auth`

**Αρχεία σου:**
1. ✅ `src/lib/supabase.ts` - Setup Supabase connection
2. ✅ `src/hooks/useAuth.ts` - Login/Register system
3. ✅ `src/app/api/projects/route.ts` - GET & POST projects
4. ✅ `src/app/api/projects/[id]/route.ts` - GET/PATCH/DELETE single project
5. ✅ `src/hooks/useProjects.ts` - React hook για projects

**Σειρά εργασίας:**
```
Hour 0-2: Supabase Setup + Database
Hour 2-4: Authentication System
Hour 4-6: Projects API (Read)
Hour 6-8: Projects API (Write)
```

---

### **Developer 2: "Mr. Pledges & Stats"**
**Branch:** `dev/pledges-api`

**Αρχεία σου:**
1. ✅ `src/utils/helpers.ts` - Helper functions
2. ✅ `src/lib/mockData.ts` - Mock data (ήδη έτοιμο!)
3. ✅ `src/types/index.ts` - Types (ήδη έτοιμο!)
4. ✅ `src/app/api/pledges/route.ts` - GET & POST pledges
5. ✅ `src/app/api/pledges/stats/route.ts` - Stats calculator
6. ✅ `src/hooks/usePledges.ts` - React hook για pledges

**Σειρά εργασίας:**
```
Hour 0-2: Helpers & Mock Data
Hour 2-4: Types & Validation
Hour 4-6: Pledges API (Core)
Hour 6-8: Stats & Real-time Counter
```

---

## 📝 Πώς να διαβάσετε τις οδηγίες στα αρχεία

Κάθε αρχείο που πρέπει να δουλέψετε έχει στην αρχή ένα block:

```typescript
// ============================================
// 👨‍💻 DEVELOPER X - TASK Y (Hour Z)
// ============================================
// 
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ:
// 1. Πρώτο πράγμα
// 2. Δεύτερο πράγμα
// ...
//
// TESTING:
// curl commands...
//
// ΧΡΟΝΟΣ: X ώρες
// COMMIT: "feat: ..."
// ============================================
```

Διαβάστε αυτό το block και ακολουθήστε τις οδηγίες!

---

## 🧪 Πώς να κάνετε Testing

### Χρησιμοποιήστε Mock Data πρώτα!

Στο API route:
```typescript
// Αντί να κάνεις database query:
import { mockProjects } from '@/lib/mockData'
return NextResponse.json({ projects: mockProjects })
```

Έτσι μπορείς να δουλέψεις χωρίς database!

### Testing με cURL

Developer 1:
```bash
# Test GET projects
curl http://localhost:3000/api/projects

# Test POST project
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Project","description":"Test"}'
```

Developer 2:
```bash
# Test POST pledge
curl -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -d '{"project_id":"1","type":"money","amount":50}'

# Test GET stats
curl http://localhost:3000/api/pledges/stats?projectId=1
```

---

## 🔥 Git Workflow

### Developer 1:
```bash
git checkout -b dev/database-auth
# Work on your files
git add .
git commit -m "feat: implement projects API"
git push origin dev/database-auth
```

### Developer 2:
```bash
git checkout -b dev/pledges-api
# Work on your files
git add .
git commit -m "feat: implement pledges API"
git push origin dev/pledges-api
```

### Merge Rules:
- ❌ **ΜΗΝ** κάνετε merge στο main μόνοι σας
- ✅ Κάντε Pull Request
- ✅ Code review από τον άλλο
- ✅ Μετά merge

---

## 📚 Βοηθητικά Αρχεία

Έχετε 3 κύρια αρχεία-οδηγούς:

1. **`README.md`** - Γενική περιγραφή project
2. **`BACKEND_TASKS.md`** - Αναλυτικά tasks και timeline
3. **`API_DOCUMENTATION.md`** - API endpoints documentation
4. **`THIS FILE`** - Quick start guide

---

## ⚡ Pro Tips

### 1. Ξεκινήστε με Mock Data
Μην περιμένετε τη database. Χρησιμοποιήστε `mockData.ts`!

### 2. Console.log everywhere
```typescript
console.log('📥 Request received:', data)
console.log('✅ Success:', result)
console.log('❌ Error:', error)
```

### 3. TypeScript θα σας βοηθήσει
Αν δεν compiles, κάτι λείπει. Διαβάστε το error!

### 4. Test συχνά
Μετά από κάθε function, κάντε test με cURL.

### 5. Commit συχνά
Κάθε feature = 1 commit. Μην περιμένετε να τελειώσει όλο το API.

---

## 🆘 Common Issues & Solutions

### Issue: "Cannot find module '@supabase/supabase-js'"
**Solution:** `npm install`

### Issue: "CORS error" όταν κάνω fetch
**Solution:** Next.js API routes δεν έχουν CORS issues. Κάνε fetch στο `/api/...`

### Issue: "TypeError: Cannot read property..."
**Solution:** Check if data exists πριν το access:
```typescript
if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })
```

### Issue: Δεν δουλεύει το Supabase
**Solution:** 
1. Check `.env.local` - έχεις τα σωστά credentials;
2. Check Supabase Dashboard - είναι online το project;
3. Check console errors

---

## 🎯 Success Checklist

Στο τέλος των 10 ωρών πρέπει να έχετε:

### Developer 1:
- [ ] Supabase connection works
- [ ] Can login/register users
- [ ] GET /api/projects returns data
- [ ] POST /api/projects creates project
- [ ] GET /api/projects/[id] returns single project

### Developer 2:
- [ ] Helper functions work
- [ ] Mock data is ready
- [ ] POST /api/pledges creates pledge
- [ ] GET /api/pledges/stats returns correct totals
- [ ] Stats update when new pledge added

### Both:
- [ ] Municipality approval works
- [ ] No merge conflicts
- [ ] All APIs tested with cURL
- [ ] Code is committed to Git

---

## 🏆 Το "Wow Factor" που θα κερδίσει το Hackathon

**Το Real-time Pledge Counter!**

Όταν κάποιος κάνει pledge:
1. Ο counter ανανεώνεται αυτόματα (real-time)
2. Progress bar animation
3. Εμφανίζεται breakdown (€250 + 10h + 3 materials)
4. Celebration animation όταν φτάσει 100%!

Αυτό θα το φτιάξει ο Developer 2 στο `usePledges.ts` hook με Supabase real-time subscriptions!

---

## 📞 Need Help?

1. Διαβάστε τις οδηγίες ΜΕΣ Α στο αρχείο
2. Check το `API_DOCUMENTATION.md` για examples
3. Check το `BACKEND_TASKS.md` για detailed tasks
4. Ρωτήστε τον άλλο developer
5. Google it! (Stack Overflow is your friend)

---

**Είστε έτοιμοι! Πάμε να κερδίσουμε το hackathon! 🚀🏆**

Made with ❤️ for Apps4Athens 2.0 2025
