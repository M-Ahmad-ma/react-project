import { Link } from "react-router-dom";
import { Icon } from "@/lib/icons";
import { FOOTER } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-16 pb-8 text-[0.8125rem] text-[#e9e9e9]">
      <div className="container-x">
        <div className="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-x-6 gap-y-8 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <h3 className="mb-3 text-[1rem] font-medium tracking-[0.04em] text-white">CRISPO</h3>
            <p className="max-w-[26ch] leading-[1.8]">{FOOTER.blurb}</p>

            <div className="mt-5 flex gap-3">
              {FOOTER.socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="grid size-9 place-items-center rounded-full bg-[#2c2c2c] text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.75 hover:bg-maroon"
                >
                  <Icon name={social} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER.columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-[0.9375rem] font-medium text-white">{column.title}</h3>
              <ul className="grid gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[#cfcfcf] transition-colors duration-200 hover:text-yellow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 flex flex-wrap justify-center gap-3 border-t border-[#333] pt-5 text-center text-muted">
          &copy; {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}
