import Image from 'next/image'

export default function LogoFlag() {
  return (
    <div>
      <span className="logo">
        <Image
        src="/images/spider.png" // Route of the image file
        height={48} // Desired size with correct aspect ratio
        width={44} // Desired size with correct aspect ratio
        alt="Spider Logo"
        />
      </span>
      <span>spider webs</span>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          position: absolute;
          left: 5vw;
        }
        span.logo {
          background: rgba(var(--pink), .4);          
          padding: 30px 20px 10px;
          left: 5vw;
        }
        span:last-child {
          color: var(--white);
          font-size: 1.5em;
          margin: 10px 0 0 15px;
        }
        `}
      </style>
    </div>
  )
}
