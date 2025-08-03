# Frontend Implementation Guide - NGEBON Farmer Dashboard

## 1. Technology Stack Overview

### Core Technologies
- **React 18** with TypeScript for component-based UI development
- **Inertia.js** for seamless Laravel-React integration
- **Tailwind CSS v4** for utility-first styling with custom design system
- **shadcn/ui v4** for pre-built, accessible components
- **Framer Motion** for smooth animations and transitions
- **React Hook Form** with Zod for form validation
- **TanStack Query** for server state management
- **Recharts** for data visualization

### Design System Integration
- **CSS Custom Properties** for dynamic theme switching
- **Component variants** using class-variance-authority (CVA)

## 2. Project Structure

```
resources/
├── js/
│   ├── Components/
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── layout/                # Layout components
│   │   ├── dashboard/             # Dashboard-specific components
│   │   ├── forms/                 # Form components
│   │   ├── charts/                # Chart components
│   │   └── common/                # Shared components
│   ├── Pages/
│   │   ├── Auth/                  # Authentication pages
│   │   ├── Dashboard/             # Dashboard pages
│   │   ├── Farmer/                # Farmer-specific pages
│   │   ├── Instructor/            # Instructor-specific pages
│   │   ├── Admin/                 # Admin-specific pages
│   │   └── Shared/                # Shared pages
│   ├── Hooks/                     # Custom React hooks
│   ├── Stores/                    # State management
│   ├── Utils/                     # Utility functions
│   └── Types/                     # TypeScript definitions

## 3. Theme System & Dark Mode Implementation

### 3.1 Theme Provider Setup
- Implement `ThemeProvider` using React Context
- Store theme preference in localStorage
- Support system theme detection
- Provide theme toggle component

### 3.2 Design System Integration
- Create theme-aware component variants
- Use shadcn-ui MCP to Get All the components
- Use spacing and typography scales from design system

### 3.3 Dark Mode Color Palette
```typescript
// Dark mode color overrides
const darkModeColors = {
  background: '#0F172A',
  surface: '#1E293B',
  card: '#334155',
  border: '#475569',
  text: '#F1F5F9',
  muted: '#94A3B8'
}
```

## 4. Component Library Implementation

### 4.1 shadcn/ui Components to Install
- **Card**: For metric cards, dashboard widgets, and content containers
- **Button**: Primary, secondary, and export button variants
- **Table**: For data display in all modules
- **Form**: Input, select, textarea with validation
- **Dialog**: Modal dialogs for confirmations and forms
- **Dropdown Menu**: Navigation and action menus
- **Tabs**: Module navigation and content organization
- **Progress**: Progress indicators and loading states
- **Badge**: Status indicators and labels
- **Avatar**: User profile pictures
- **Sidebar**: Navigation sidebar with collapsible sections
- **Breadcrumb**: Navigation breadcrumbs
- **Alert**: Success, warning, error notifications
- **Tooltip**: Helpful information on hover
- **Skeleton**: Loading placeholders

### 4.2 Custom Component Development
- **MetricCard**: Reusable metric display with icons
- **ChartCard**: Wrapper for chart components
- **StatusBadge**: Role and status indicators
- **DataTable**: Enhanced table with sorting and filtering
- **FormField**: Consistent form field wrapper
- **LoadingSpinner**: Custom loading animations
- **EmptyState**: Empty state illustrations

## 5. Role-Based Dashboard Implementation

### 5.1 Dashboard Layout Structure
- **Sidebar Navigation**: Role-specific menu items
- **Header**: User info, theme toggle, notifications
- **Main Content**: Dashboard widgets and data
- **Footer**: System information and links

### 5.2 Farmer Dashboard
**Navigation Items:**
- Dashboard Overview (Home icon)
- Crop Management (Plant icon)
- Inventory (Package icon)
- Harvest Tracking (Scissors icon)
- Sales & Finance (Chart icon)
- Reports (File icon)

**Dashboard Widgets:**
- Current crop status cards
- Recent harvest summary
- Financial overview
- Weather information
- Task reminders
- Quick actions

### 5.3 Instructor Dashboard
**Navigation Items:**
- Dashboard Overview
- Farmer Management
- Crop Monitoring
- Training Materials
- Reports & Analytics
- Communication Hub

**Dashboard Widgets:**
- Assigned farmers count
- Crop health overview
- Training schedule
- Recent activities
- Performance metrics
- Quick farmer search

### 5.4 Admin Dashboard
**Navigation Items:**
- System Overview
- User Management
- Role Management
- System Analytics
- Settings
- Audit Logs

**Dashboard Widgets:**
- System health metrics
- User activity overview
- Revenue analytics
- System performance
- Recent activities
- Quick actions

## 6. Authentication & Authorization UI

### 6.1 Authentication Pages
- **Login Page**: Email/password with remember me
- **Registration Page**: Role-based registration forms
- **Password Reset**: Email-based password reset
- **Email Verification**: Account verification flow

### 6.2 Role Management Interface
- **User Management**: Admin interface for user CRUD
- **Role Assignment**: Drag-and-drop role assignment
- **Permission Matrix**: Visual permission management
- **Access Control**: Role-based route protection

### 6.3 Permission-Based UI
- **Conditional Rendering**: Show/hide elements based on permissions
- **Route Guards**: Protect routes based on user roles
- **Action Buttons**: Enable/disable based on permissions
- **Data Filtering**: Show only permitted data

## 7. Module-Specific UI Components

### 7.1 Farmer Registration Module
- **Registration Form**: Multi-step form with validation
- **Location Picker**: GPS coordinates and address selection
- **Farm Details**: Farm type, size, and crop selection
- **Document Upload**: ID verification and farm photos

### 7.2 Crop Management Module
- **Crop Planning**: Calendar-based crop planning
- **Input Tracking**: Fertilizer and pesticide usage forms
- **Growth Timeline**: Visual crop growth stages
- **Image Gallery**: Crop progress photos

### 7.3 Inventory Management Module
- **Stock Dashboard**: Real-time inventory overview
- **Reorder Alerts**: Low stock notifications
- **Usage Tracking**: Input consumption forms
- **Budget Analysis**: Cost tracking and analysis

### 7.4 Harvest Management Module
- **Harvest Entry**: Daily harvest data entry
- **Grading System**: Quality assessment interface
- **Waste Tracking**: Loss and rejection logging
- **Logistics**: Storage and transportation tracking

### 7.5 Sales & Finance Module
- **Sales Dashboard**: Revenue and profit overview
- **Invoice Generator**: Automated invoice creation
- **Financial Reports**: Profit/loss analysis
- **Payment Tracking**: Payment status and history

## 8. Data Visualization Components

### 8.1 Chart Components
- **Bar Charts**: Crop yields, sales data
- **Line Charts**: Growth trends, financial trends
- **Pie Charts**: Crop distribution, revenue breakdown
- **Area Charts**: Seasonal patterns
- **Gauge Charts**: Progress indicators

### 8.2 Dashboard Widgets
- **Metric Cards**: Key performance indicators
- **Progress Rings**: Goal completion tracking
- **Status Indicators**: System health and alerts
- **Trend Indicators**: Up/down arrows with percentages

### 8.3 Interactive Elements
- **Date Range Pickers**: Filter data by time period
- **Filter Dropdowns**: Filter by crop, location, etc.
- **Search Functionality**: Global and module-specific search
- **Export Options**: PDF, Excel export buttons

## 9. Responsive Design Implementation

### 9.1 Mobile-First Approach
- **Touch-Friendly**: Large touch targets and gestures
- **Simplified Navigation**: Collapsible sidebar on mobile
- **Optimized Forms**: Mobile-friendly form layouts

### 9.2 Tablet Optimization
- **Adaptive Layouts**: Responsive grid systems
- **Touch Interactions**: Swipe gestures and touch feedback
- **Orientation Support**: Portrait and landscape layouts

### 9.3 Desktop Enhancements
- **Multi-Column Layouts**: Efficient use of screen space
- **Keyboard Shortcuts**: Productivity enhancements
- **Hover States**: Rich hover interactions
- **Advanced Features**: Drag-and-drop, bulk actions

## 10. Performance Optimization

### 10.1 Code Splitting
- **Route-Based Splitting**: Lazy load page components
- **Component Splitting**: Lazy load heavy components
- **Vendor Splitting**: Separate third-party libraries

### 10.2 Caching Strategy
- **Query Caching**: TanStack Query for API responses
- **Component Caching**: React.memo for expensive components
- **Asset Caching**: Optimized image and font loading

### 10.3 Bundle Optimization
- **Tree Shaking**: Remove unused code
- **Minification**: Compress JavaScript and CSS
- **Image Optimization**: WebP format and lazy loading

## 11. Accessibility Implementation

### 11.1 WCAG 2.1 Compliance
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: Meet AA standards in both themes
- **Focus Management**: Clear focus indicators

### 11.2 Inclusive Design
- **Multilingual Support**: Sinhala, Tamil, English
- **Font Scaling**: Support for larger text sizes
- **Reduced Motion**: Respect user motion preferences
- **High Contrast Mode**: Enhanced contrast option

## 12. Icon Implementation Strategy

### 12.1 Icon Sources
- **Icons8**: MCP

### 12.2 Icon Categories
- **Navigation Icons**: Dashboard, modules, actions
- **Agricultural Icons**: Crops, tools, weather
- **Business Icons**: Finance, reports, analytics
- **System Icons**: Settings, notifications, user

### 12.3 Icon Implementation
- **Icon Components**: Wrapper components for consistency
- **Size Variants**: Small, medium, large icon sizes
- **Color Variants**: Theme-aware icon colors
- **Animation**: Subtle hover and click animations

## 13. Form Implementation Strategy

### 13.1 Form Libraries
- **React Hook Form**: Performance-optimized forms
- **Zod**: Type-safe validation schemas
- **shadcn/ui Form**: Pre-built form components

### 13.2 Form Patterns
- **Multi-Step Forms**: Complex registration flows
- **Dynamic Forms**: Conditional field rendering
- **Bulk Actions**: Multi-select operations
- **Auto-Save**: Draft saving functionality

### 13.3 Validation Strategy
- **Real-time Validation**: Instant feedback
- **Server Validation**: Backend validation integration
- **Custom Validators**: Business logic validation
- **Error Handling**: User-friendly error messages

## 14. State Management Strategy

### 14.1 Local State
- **React useState**: Component-level state
- **React useReducer**: Complex component state
- **Custom Hooks**: Reusable state logic

### 14.2 Global State
- **TanStack Query**: Server state management
- **Zustand**: Lightweight global state
- **Context API**: Theme and user preferences

### 14.3 Form State
- **React Hook Form**: Form state management
- **Form Persistence**: Draft saving and recovery
- **Optimistic Updates**: Immediate UI feedback




