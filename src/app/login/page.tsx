"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, KeyRound, Landmark, ShieldCheck } from "lucide-react";

const steps = [
  { title: "اختيار المكتب", icon: Landmark },
  { title: "اختيار الشركة", icon: Building2 },
  { title: "بيانات الدخول", icon: KeyRound },
  { title: "اختيار التفويض", icon: ShieldCheck }
];

export default function LoginPage() {
  const [activeStep, setActiveStep] = useState(0);
  const CurrentIcon = steps[activeStep].icon;

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <div className="eyebrow">Secure Access</div>
        <h1>دخول متعدد المراحل إلى نظام N9.</h1>
        <p className="lead">
          هذا المسار يجهز تجربة الدخول المستقبلية: مكتب، شركة، بيانات دخول، ثم تفويض وصلاحيات.
        </p>
        <div className="step-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <button
                className={index === activeStep ? "step-box active" : "step-box"}
                key={step.title}
                onClick={() => setActiveStep(index)}
                type="button"
              >
                <Icon size={24} />
                <strong>{step.title}</strong>
              </button>
            );
          })}
        </div>
        <div className="glass-panel stack-panel">
          <CurrentIcon size={34} color="var(--gold)" />
          <h3>{steps[activeStep].title}</h3>
          <input className="input" placeholder="قيمة تجريبية لهذه الخطوة" />
          <div className="actions">
            <button className="button primary" type="button" onClick={() => setActiveStep(Math.min(activeStep + 1, steps.length - 1))}>
              التالي
            </button>
            <Link className="button" href="/dashboard">
              دخول تجريبي <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
