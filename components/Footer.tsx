export default function Footer() {
    return (
      <div className="absolute bottom-0 w-full h-[60px] flex justify-center items-center">
        <footer>
          <div className="grid place-content-center">
            <div className="grid grid-cols-1 min-[500px]:grid-cols-3 items-center text-center text-xs text-[#DAD6C8] gap-12">
              <a className="relative w-[5.25rem]" href="/">
              GitHub  
              </a>
              {/* Blog Link */}
              <a
                href="https://cursor.com/blog"
                className="hover:text-newdimhover text-newdim hover:transition hover:duration-500"
                style={{ fontSize: "11px" }}
              >
                Linkedin
              </a>
              {/* Email Link */}
              <a
                href="mailto:hiring@anysphere.inc"
                className="hover:text-newdimhover text-newdim hover:transition hover:duration-500 hidden min-[500px]:block"
                style={{ fontSize: "11px" }}
              >
                heyabhay@20.236.44.162
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  