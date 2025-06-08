# CodeLab

## Low Code App Form Mobile Application

A cross-platform mobile application built with React Native, powered by Angular and NestJS backend.

### Tech Stack

- Frontend Mobile: React Native
- Admin Dashboard: Angular
- Backend: NestJS
- Database: PostgreSQL

### Features

- Low code form builder
- Drag and drop interface
- Custom form components
- Form validation
- Data persistence
- Real-time updates
- Offline support
- User authentication
- Role-based access control

### Prerequisites

- Node.js (v20+)
- npm or yarn
- React Native development environment
- Angular CLI
- NestJS CLI
- PostgreSQL

### Project Structure

```
code-lab/
├── designer-ui/            # Angular admin dashboard
└── designer-api/           # NestJS backend
```

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/code-lab.git
```

2. Install dependencies:

Mobile app:
```bash
cd mobile
npm install
```

Admin dashboard:
```bash
cd admin
npm install
```

Server:
```bash
cd server
npm install
```

3. Configure environment variables:
- Create `.env` files in each directory
- Set up database connection
- Configure API endpoints

4. Run the applications:

Mobile app:
```bash
cd mobile
npm run android  # for Android
npm run ios      # for iOS
```

Admin dashboard:
```bash
cd admin
ng serve
```

Server:
```bash
cd server
npm run start:dev
```

### Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

### License

MIT License - see the [LICENSE](LICENSE) file for details

### Support

For support, email support@codelab.com or join our Slack channel.
