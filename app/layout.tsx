import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '```json
[
  {
    "title": "AI-Powered Smart Contract Vulnerability Scanner",
    "description": "أداة تعتمد على الذكاء الاصطناعي لتحليل عقود الذكاء بشكل تلقائي واكتشاف الثغرات الأمنية المحتملة.",
    "mvp_plan": "تطوير نموذج أولي يقوم بتحميل عقد ذكي، ثم يستخدم خوارزميات التعلم الآلي لتحليل الكود واكتشاف الثغرات. يمكن استخدام مكتبات موجودة مثل OpenZeppelin لتحليل العقود."
  },
  {
    "title": "Smart Contract Compliance Checker",
    "description": "أداة للتحقق من توافق العقود الذكية مع المعايير القانونية والتنظيمية.",
    "mvp_plan": "إنشاء واجهة بسيطة لتحميل العقود الذكية، ثم استخدام مجموعة من القواعد المحددة مسبقًا للتحقق من التوافق. يمكن استخدام قواعد البيانات العامة للمعايير القانونية."
  },
  {
    "title": "Real-Time Smart Contract Monitoring Dashboard",
    "description": "لوحة تحكم تفاعلية لمراقبة العقود الذكية في الوقت الحقيقي وتحليل سلوكها.",
    "mvp_plan": "تطوير واجهة مستخدم بسيطة تعرض معلومات حول العقود الذكية النشطة، مع استخدام واجهات برمجة التطبيقات (APIs) لجلب البيانات من الشبكات المختلفة وتحليلها."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}