export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &#169; Your website {year}</p>
    </footer>
  );
}
