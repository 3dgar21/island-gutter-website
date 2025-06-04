interface SectionWrapperProps {
    id: string;
    title: string;
    subtitle?: string;
    className?: string;
    children: React.ReactNode;
  }
  
  export default function SectionWrapper({ id, title, subtitle, className = '', children }: SectionWrapperProps) {
    return (
      <section id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="container max-w-screen-2xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
            {subtitle && <p className="text-muted-foreground mt-2 text-lg">{subtitle}</p>}
          </div>
          {children}
        </div>
      </section>
    );
  }
  