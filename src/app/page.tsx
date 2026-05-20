"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Shield, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "الرئيسية",
          id: "hero",
        },
        {
          name: "عن الشركة",
          id: "about",
        },
        {
          name: "العقارات",
          id: "listings",
        },
        {
          name: "تواصل معنا",
          id: "contact",
        },
      ]}
      brandName="Algeria Estate"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="الاستثمار العقاري الأمثل في الجزائر"
      description="اكتشف أفخم العقارات والفرص الاستثمارية في الجزائر، مع فريقنا المتخصص في تقديم أفضل الخيارات التي تناسب تطلعاتك الاستثمارية والسكنية."
      buttons={[
        {
          text: "تصفح العقارات",
          href: "#listings",
        },
        {
          text: "اتصل بنا",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/traditional-beautiful-building-moroccan-morocco_1203-5629.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="شريكك الموثوق في العقارات"
      description="نحن نؤمن بأن كل عقار هو فرصة لبناء مستقبل. بخبرة سنوات في السوق الجزائري، نضمن لك الشفافية والاحترافية."
      metrics={[
        {
          value: "٥٠٠+",
          title: "عقار متميز",
        },
        {
          value: "١٠+",
          title: "سنوات خبرة",
        },
        {
          value: "١٠٠٠+",
          title: "عميل سعيد",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/real-estate-concept-with-wooden-blocks-flat-lay-woman-making-house-model_176474-8288.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "استشارات خبراء",
          description: "تحليل دقيق للسوق وأفضل النصائح الاستثمارية.",
          icon: Shield,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-stationery-material-blueprint_23-2148301745.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/indoor-objects-company-background-papers_1304-2624.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-beautiful-building-moroccan-morocco_1203-5629.jpg",
          imageAlt: "modern apartment interior algeria",
        },
        {
          title: "شفافية مطلقة",
          description: "نضمن لك عقوداً سليمة وإجراءات قانونية موثقة.",
          icon: Zap,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/pollution-concept-factory-emisions_23-2149094925.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/house-model-compass-plan-background-real-estate-concept_1423-179.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-concept-with-wooden-blocks-flat-lay-woman-making-house-model_176474-8288.jpg",
          imageAlt: "modern apartment interior algeria",
        },
        {
          title: "تغطية شاملة",
          description: "تغطية لأهم المناطق والمدن في الجزائر.",
          icon: Star,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/paper-hearts-different-sizes_23-2147596668.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/colorful-retro-landscape-vaporwave-style_23-2148980054.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-castle-interior-design_23-2151010548.jpg",
          imageAlt: "modern apartment interior algeria",
        },
      ]}
      title="لماذا تختارنا؟"
      description="نقدم خدمات شاملة تجعل من عملية شراء أو بيع عقارك تجربة سلسة وآمنة."
    />
  </div>

  <div id="listings" data-section="listings">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "فيلا فاخرة - العاصمة",
          price: "١٥٠,٠٠٠,٠٠٠ دج",
          variant: "فيلا",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-castle-interior-design_23-2151010548.jpg",
        },
        {
          id: "2",
          name: "شقة حديثة - وهران",
          price: "٢٥,٠٠٠,٠٠٠ دج",
          variant: "شقة",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-together-house-steps_23-2148219031.jpg",
        },
        {
          id: "3",
          name: "منزل عائلي - قسنطينة",
          price: "٣٠,٠٠٠,٠٠٠ دج",
          variant: "منزل",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-resting-home-cozy-sofa_7502-9284.jpg",
        },
        {
          id: "4",
          name: "استوديو عصري - عنابة",
          price: "١٢,٠٠٠,٠٠٠ دج",
          variant: "استوديو",
          imageSrc: "http://img.b2bpic.net/free-photo/gates-city-cloudy-day_1268-14466.jpg",
        },
        {
          id: "5",
          name: "أرض للبناء - سطيف",
          price: "٨,٠٠٠,٠٠٠ دج",
          variant: "أرض",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-holiday-home_23-2151918251.jpg",
        },
        {
          id: "6",
          name: "شقة دوبلكس - البليدة",
          price: "٤٥,٠٠٠,٠٠٠ دج",
          variant: "دوبلكس",
          imageSrc: "http://img.b2bpic.net/free-photo/beach-chair-resort_1150-17976.jpg",
        },
      ]}
      title="أحدث العقارات المعروضة"
      description="تصفح مجموعة مختارة من أفضل العقارات في مختلف أنحاء البلاد."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "٩٨٪",
          title: "رضا العملاء",
          items: [
            "خدمة متميزة",
            "دعم مستمر",
            "ثقة متبادلة",
          ],
        },
        {
          id: "m2",
          value: "٥٠٠+",
          title: "مشاريع ناجحة",
          items: [
            "بناء",
            "بيع",
            "استثمار",
          ],
        },
        {
          id: "m3",
          value: "١٥٠٠+",
          title: "استشارة مجانية",
          items: [
            "تخطيط",
            "تحليل",
            "حلول",
          ],
        },
      ]}
      title="إنجازاتنا في أرقام"
      description="نفتخر بما حققناه لعملائنا في سوق العقارات الجزائري."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "سارة أحمد",
          handle: "مستثمرة",
          testimonial: "خدمة ممتازة واحترافية عالية في التعامل مع العقارات.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-smiley-business-male_23-2148479546.jpg",
        },
        {
          id: "2",
          name: "محمد خليل",
          handle: "مالك منزل",
          testimonial: "لقد ساعدوني في إيجاد منزلي المثالي في وقت قياسي.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-man-home-office_329181-20664.jpg",
        },
        {
          id: "3",
          name: "ليلى بلقاسم",
          handle: "مستشارة",
          testimonial: "شفافية مطلقة ومصداقية في كل تفاصيل العقد.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-caucasian-guy-dating-afro-american-girl_1262-19996.jpg",
        },
        {
          id: "4",
          name: "ياسين عماري",
          handle: "رجل أعمال",
          testimonial: "أفضل خيار للاستثمار العقاري الموثوق في الجزائر.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-satisfied-man-rejoicing-founding-perfect-home-apartment-holding-paper-house-model-sta_1258-113657.jpg",
        },
        {
          id: "5",
          name: "مريم نوري",
          handle: "مهندسة",
          testimonial: "تجربة شراء سهلة وآمنة بفضل خبرة الفريق.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-charming-delighted-cute-female-customer-give-positive-feedback-show-thumbsup-like-gesture-smiling-broadly-agree-recommend-perfect-product-skincare-standing-satisfied-orange-background_1258-308855.jpg",
        },
      ]}
      showRating={true}
      title="آراء عملائنا"
      description="كلمات من عملائنا الذين وثقوا بنا في رحلة البحث عن منزل أحلامهم."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "كيف أبدأ الاستثمار العقاري؟",
          content: "يمكنك البدء بالاتصال بنا للحصول على استشارة أولية مجانية وتحليل للسوق.",
        },
        {
          id: "f2",
          title: "ما هي الأوراق المطلوبة؟",
          content: "نحن نساعدك في تجهيز كافة الأوراق القانونية اللازمة لضمان سلامة عقد الملكية.",
        },
        {
          id: "f3",
          title: "هل تقدمون خدمات التمويل؟",
          content: "لدينا شراكات مع البنوك لمساعدتك في خيارات التمويل المتاحة.",
        },
      ]}
      title="أسئلة شائعة"
      description="إجابات على أكثر الأسئلة شيوعاً حول الاستثمار العقاري."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="تواصل معنا"
      title="ابدأ رحلتك اليوم"
      description="هل لديك استفسار أو ترغب في حجز موعد؟ لا تتردد في مراسلتنا."
      inputPlaceholder="أدخل بريدك الإلكتروني"
      buttonText="إرسال"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "الرئيسية",
              href: "#hero",
            },
            {
              label: "العقارات",
              href: "#listings",
            },
          ],
        },
        {
          items: [
            {
              label: "سياسة الخصوصية",
              href: "#",
            },
            {
              label: "شروط الاستخدام",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Algeria Estate"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
