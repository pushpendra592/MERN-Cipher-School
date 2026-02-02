## Overview

The Client-Server Model describes how computers communicate over the internet to deliver websites.

---

## Key Components

### Client

- The web browser (Chrome, Firefox, Safari, Edge, etc.)
- Also called the "user's side"
- Sends requests and displays responses

### Server

- A computer that stores website files and data
- Available 24/7 on the internet
- Processes requests and sends responses

---

## Request-Response Cycle

### Step-by-Step Process

| Step | Action | Description |
|------|--------|-------------|
| 1 | Client sends request | User types URL or clicks link |
| 2 | Server processes | Server receives request and locates files |
| 3 | Server sends response | Returns HTML, CSS, JS, images, etc. |
| 4 | Browser renders | Displays the final webpage |

### Visual Diagram
```
  ┌────────────────┐
  │    CLIENT      │
  │  (Your Browser)│
  └───────┬────────┘
          │ 1. Request
          │ (I want webpage X)
          ↓
  ┌────────────────┐
  │    SERVER      │
  │ (Web Server)   │
  └───────┬────────┘
          │ 2. Response
          │ (Here are the files)
          ↓
  ┌────────────────┐
  │  Webpage loads │
  │   in browser   │
  └────────────────┘
```

---

## Key Terms

| Term | Definition |
|------|------------|
| Request | Message sent from client asking for resources |
| Response | Message sent from server containing requested resources |
| URL | Web address used to locate resources |
| HTTP/HTTPS | Protocol used for communication between client and server |

---
## Next Topic
- [[Developer Tools]]

---

#module1 #client-server #networking #day1