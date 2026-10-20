import { Breadcrumb } from "@/components/ui/Breadcrumb";

/**
 * Cream opener shared by every subpage — breadcrumb, title, intro and
 * optional actions, with a soft yellow glow behind it.
 */
export function PageHead({ title, text, actions, breadcrumb, children }) {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-cream py-[clamp(2.5rem,1rem+6vw,4.5rem)]">
      <div
        className="band-blur -inset-x-[10%] -top-[30%] h-[130%]"
        style={{
          background:
            "radial-gradient(28rem 18rem at 78% 30%, rgb(255 203 48 / 32%), transparent 70%)",
          filter: "blur(10px)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}

        <div className="grid max-w-[58ch] gap-4 justify-items-start">
          <h1 className="text-hero">{title}</h1>
          {text && <p className="text-[1rem] text-body">{text}</p>}
          {actions && <div className="mt-2 flex flex-wrap gap-4">{actions}</div>}
        </div>

        {children}
      </div>
    </section>
  );
}
