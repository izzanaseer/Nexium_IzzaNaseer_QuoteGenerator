export default function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <footer className="py-2 text-center text-sm text-muted-foreground border-t border-border mt-12">
        <p>&copy; {new Date().getFullYear()} Mehwr. All rights reserved.</p>
        <p className="mt-1">Built with ❤️ by Izza Naseer</p>
      </footer>
    </div>
  );
}
