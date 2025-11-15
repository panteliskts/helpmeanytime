# PolisPraxis API Documentation

## Base URL
```
Development: http://localhost:3000/api
Production: https://polispraxis.vercel.app/api
```

---

## 📋 Projects API

### GET /api/projects
Get all projects with optional filters.

**Query Parameters:**
- `status` - Filter by status (pending, approved, active, completed, rejected)
- `category` - Filter by category (infrastructure, environment, social, culture)
- `lat` - Latitude for location-based filtering
- `lng` - Longitude for location-based filtering
- `radius` - Radius in km for location filtering
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

**Response:**
```json
{
  "projects": [
    {
      "id": "uuid",
      "title": "Fix Broken Sidewalk",
      "description": "Sidewalk needs repair",
      "category": "infrastructure",
      "status": "pending",
      "location": { "lat": 37.9838, "lng": 23.7275 },
      "budget_needed": 500,
      "pledged_money": 250,
      "pledged_hours": 10,
      "pledged_materials": 3,
      "created_by": "user_id",
      "created_at": "2025-01-01T00:00:00Z"
    }
  ],
  "total": 42,
  "page": 1,
  "limit": 10
}
```

---

### GET /api/projects/[id]
Get single project with all details and pledges.

**Response:**
```json
{
  "project": {
    "id": "uuid",
    "title": "Fix Broken Sidewalk",
    "description": "Detailed description...",
    "category": "infrastructure",
    "status": "approved",
    "location": { "lat": 37.9838, "lng": 23.7275, "address": "Syntagma Square" },
    "budget_needed": 500,
    "pledges": [
      {
        "id": "uuid",
        "type": "money",
        "amount": 50,
        "user_name": "Maria K.",
        "created_at": "2025-01-01T00:00:00Z"
      }
    ],
    "creator": {
      "id": "uuid",
      "name": "John Doe",
      "role": "citizen"
    }
  }
}
```

---

### POST /api/projects
Create new project (requires authentication).

**Request Body:**
```json
{
  "title": "Fix Broken Sidewalk",
  "description": "The sidewalk on Syntagma Square needs immediate repair",
  "category": "infrastructure",
  "location": {
    "lat": 37.9838,
    "lng": 23.7275,
    "address": "Syntagma Square, Athens"
  },
  "budget_needed": 500,
  "initial_pledge": 50
}
```

**Response:**
```json
{
  "success": true,
  "project": {
    "id": "new-uuid",
    "status": "pending"
  }
}
```

---

## 🤝 Pledges API (THE WOW FACTOR!)

### POST /api/pledges
Create new pledge (requires authentication).

**Request Body for Money:**
```json
{
  "project_id": "uuid",
  "type": "money",
  "amount": 50,
  "description": "Happy to help!"
}
```

**Request Body for Time:**
```json
{
  "project_id": "uuid",
  "type": "time",
  "hours": 10,
  "description": "I can help paint on weekends",
  "availability": "2025-01-15"
}
```

**Request Body for Materials:**
```json
{
  "project_id": "uuid",
  "type": "materials",
  "materials": "Paint, brushes, and ladders",
  "estimated_value": 100,
  "description": "I own a hardware store"
}
```

**Response:**
```json
{
  "success": true,
  "pledge": {
    "id": "new-uuid",
    "status": "active"
  }
}
```

---

### GET /api/pledges?projectId=xxx
Get all pledges for a project.

**Response:**
```json
{
  "pledges": [
    {
      "id": "uuid",
      "project_id": "uuid",
      "type": "money",
      "amount": 50,
      "user": {
        "id": "uuid",
        "name": "Maria K.",
        "avatar": "url"
      },
      "created_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

---

### GET /api/pledges/stats?projectId=xxx
Get pledge statistics (real-time counter).

**Response:**
```json
{
  "stats": {
    "total_money": 450,
    "total_hours": 35,
    "total_materials": 8,
    "pledge_count": 15,
    "progress_percentage": 75,
    "breakdown": {
      "money_pledges": 10,
      "time_pledges": 3,
      "materials_pledges": 2
    }
  }
}
```

---

## 🏛️ Municipality API

### POST /api/municipality/approve
Approve or reject a project (requires municipality role).

**Request Body:**
```json
{
  "project_id": "uuid",
  "action": "approve",
  "comment": "Great initiative! The municipality will co-fund €200.",
  "municipality_funding": 200
}
```

**Response:**
```json
{
  "success": true,
  "project": {
    "id": "uuid",
    "status": "approved",
    "municipality_funding": 200
  }
}
```

---

### GET /api/municipality/stats
Get municipality dashboard statistics.

**Response:**
```json
{
  "stats": {
    "pending_projects": 12,
    "approved_projects": 45,
    "active_projects": 23,
    "completed_projects": 15,
    "total_municipality_funding": 25000,
    "total_civic_pledges": 18500,
    "impact_score": 8.5
  }
}
```

---

## 🔐 Authentication

All protected endpoints require authentication via Supabase JWT token.

**Headers:**
```
Authorization: Bearer <supabase_jwt_token>
```

---

## ⚠️ Error Responses

All errors follow this format:

```json
{
  "error": {
    "message": "Project not found",
    "code": "PROJECT_NOT_FOUND",
    "status": 404
  }
}
```

**Common Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## 🧪 Testing with cURL

```bash
# Create project
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Test Project",
    "description": "Test description",
    "category": "infrastructure",
    "location": {"lat": 37.9838, "lng": 23.7275},
    "budget_needed": 500
  }'

# Create pledge
curl -X POST http://localhost:3000/api/pledges \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "project_id": "PROJECT_ID",
    "type": "money",
    "amount": 50
  }'
```
