## 1. Form Screen Setup

- [ ] 1.1 Create apps/native/src/app/match/new.tsx route
- [ ] 1.2 Add TanStack Form or React Hook Form dependency (check project standards)
- [ ] 1.3 Create form component with proper TypeScript types
- [ ] 1.4 Add navigation to form from seasons list or explore tab
- [ ] 1.5 Configure form layout with TextInput components

## 2. Form Fields Implementation

- [ ] 2.1 Add homeTeam text input field with label
- [ ] 2.2 Add awayTeam text input field with label
- [ ] 2.3 Add seasonName text input field with label
- [ ] 2.4 Configure keyboard types appropriately
- [ ] 2.5 Add form validation (all fields required)
- [ ] 2.6 Display validation errors inline

## 3. API Mutation

- [ ] 3.1 Create useCreateMatch mutation hook with TanStack Query
- [ ] 3.2 Implement POST /api/matches API call
- [ ] 3.3 Pass homeTeam, awayTeam, seasonName in request body
- [ ] 3.4 Handle success response
- [ ] 3.5 Handle error response with user-friendly messages

## 4. Form Submission Flow

- [ ] 4.1 Add submit button at bottom of form
- [ ] 4.2 Disable submit during loading state
- [ ] 4.3 Show loading indicator on submit button
- [ ] 4.4 On success: show success message and navigate back
- [ ] 4.5 On error: display error message and allow retry
- [ ] 4.6 Invalidate seasons/matches queries to refresh lists

## 5. Navigation & UX

- [ ] 5.1 Add "Add Match" button on seasons list screen
- [ ] 5.2 Or add as floating action button
- [ ] 5.3 Add cancel button to form
- [ ] 5.4 Confirm unsaved changes before navigating away
- [ ] 5.5 Clear form after successful submission

## 6. Testing & Validation

- [ ] 6.1 Test form validation works correctly
- [ ] 6.2 Test successful match creation
- [ ] 6.3 Test season auto-creation via seasonName
- [ ] 6.4 Test season linking when seasonName exists
- [ ] 6.5 Verify match appears in season detail after creation
- [ ] 6.6 Test error handling for network failures
- [ ] 6.7 Run linter and fix issues
