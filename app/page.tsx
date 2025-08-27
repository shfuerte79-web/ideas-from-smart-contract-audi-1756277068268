export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Smart Contract Auditor AI
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}