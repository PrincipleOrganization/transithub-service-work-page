export default function({ isHMR, route, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return

  if (route.path = '*') {
    return redirect('/')
  }
}