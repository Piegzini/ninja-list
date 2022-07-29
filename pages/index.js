import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
      <div>
        <Navbar />
        <h1>Welcome</h1>
          <Link href="/ninjas">
              <a>See ninja listing</a>
          </Link>
        <Footer />
      </div>

  )
}
