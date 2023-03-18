export default function Footer() {
  return (
    <footer className="p-10 bg-base-200">
      <div className="footer text-base-content max-w-7xl mx-auto">
        <div>
          <img src="/images/logo.jpg" className="max-h-24" />
          <p>
            Fix Logistics
            <br />
            alamat alamat alamat
          </p>
        </div>
        <div>
          <span className="footer-title">Layanan</span>
          <a className="link link-hover">Cek Tarif</a>
          <a className="link link-hover">Cek Pengiriman</a>
          <a className="link link-hover">Cek Cabang</a>
        </div>
        <div>
          <span className="footer-title">Perusahaan</span>
          <a className="link link-hover">Tentang Fix Logistic</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Lowongan Kerja</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Syarat dan Ketentuan</a>
          <a className="link link-hover">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
}
