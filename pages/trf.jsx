import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Seo from '@/components/Seo';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CloudinaryImg from '@/components/CloudinaryImg';

export default function TransferPage() {
  const [copyStatus, setCopyStatus] = useState('Copy Nomor Rekening');

  return (
    <>
      <Seo
        title='Rekening Clarence - theodorusclarence.com'
        description='Buka untuk melihat QR Code dan Nomor Rekening Clarence'
        robots='noindex,nofollow'
      />
      <div className='min-h-screen'>
        <Nav />
        <section className='py-6 mt-4'>
          <article className='text-center layout'>
            <h1>Rekening BCA</h1>
            <p className='mt-2'>Atas Nama Clarence</p>
            <figure className='max-w-sm mx-auto mt-4 overflow-hidden bg-gray-500 rounded shadow-sm dark:shadow-none'>
              <CloudinaryImg
                publicId='theodorusclarence/qr-bca_rcbkew.jpg'
                width={992}
                height={886}
                alt='QR BCA'
              />
            </figure>
            <div className='flex flex-col items-center mt-8 space-y-4'>
              <code className='px-4 py-2 font-bold'>
                <span className='accent'>7630055037</span>
              </code>
              <CopyToClipboard
                text='7630055037'
                onCopy={() => {
                  setCopyStatus('Copied to clipboard 🥳');
                  setTimeout(() => setCopyStatus('Copy Nomor Rekening'), 1500);
                }}
              >
                <button className='block px-4 py-2 font-medium rounded-md ring-vis-0 btn border-thin'>
                  {copyStatus}
                </button>
              </CopyToClipboard>
            </div>
          </article>
        </section>
        <Footer />
      </div>
    </>
  );
}
