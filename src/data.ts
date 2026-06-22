import { ServiceItem, FlutterFile } from "./types";

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "custom-web",
    title: "Custom Website Development",
    description: "Bespoke, blazingly fast websites built using modern cutting-edge web technologies and optimized layout models.",
    iconName: "Globe",
  },
  {
    id: "ecommerce",
    title: "E-commerce App Development",
    description: "Highly scalable digital stores with custom product cataloging, optimized conversion flows, and fast search indexing.",
    iconName: "ShoppingCart",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Intuitive, high-fidelity responsive user checkouts and interfaces designed with geometric harmony and user-centric flows.",
    iconName: "Figma",
  },
  {
    id: "webapp",
    title: "Web App Development",
    description: "Immersive full-stack software applications featuring seamless client-side rendering and interactive reactive systems.",
    iconName: "Cpu",
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description: "Secure, reliable, and micro-latency server-side architectures, custom RESTful/GraphQL APIs, and high-concurrency handling.",
    iconName: "Server",
  },
  {
    id: "admin-dash",
    title: "Admin Dashboard Development",
    description: "Clean analytical interfaces featuring dense telemetry representations, user log control arrays, and status monitors.",
    iconName: "LayoutDashboard",
  },
  {
    id: "seo-perf",
    title: "SEO & Performance Optimization",
    description: "Precision auditing and code structure refactoring to attain pristine 100/100 Core Web Vitals and search rankings.",
    iconName: "Zap",
  },
  {
    id: "brand-identity",
    title: "Brand Identity & Logo Design",
    description: "Cohesive visual narratives incorporating modern typographic pairing, custom color guides, and vector marks.",
    iconName: "Palette",
  },
  {
    id: "redesign",
    title: "Website Redesign",
    description: "Modernizing legacy structures into mobile-responsive, lightning-fast digital assets without losing SEO equity.",
    iconName: "RefreshCw",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Proactive, multi-tier runtime monitoring, server container optimization to prevent scaling outages, and dependency updates.",
    iconName: "ShieldCheck",
  },
  {
    id: "cms",
    title: "CMS Development",
    description: "Empowering non-technical operators with elegant Headless CMS configurations, custom schema fields, and fast editors.",
    iconName: "FileText",
  },
  {
    id: "payment-integration",
    title: "Payment & Third-party Integration",
    description: "Secure, multi-currency processing gateways (Stripe, Paypal) and custom webhook sync systems for high-trust reliability.",
    iconName: "CreditCard",
  },
  {
    id: "startup-mvp",
    title: "Startup & MVP Development",
    description: "Rapidly validating ideas to establish strong product-market fit using compressed development cycles and modular designs.",
    iconName: "Rocket",
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description: "Strategic consulting regarding high-availability cloud setups, optimal library choices, and engineering hiring plans.",
    iconName: "MessageSquareText",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Replacing laborious manual entry and workflow bottlenecks with customized visual pipelines and algorithmic logic.",
    iconName: "BrainCircuit",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Autonomous server engines using LLMs to interact with database APIs, analyze logs, and answer inquiries intelligently.",
    iconName: "Bot",
  },
];

// Customizable constants for the developer
export const DEVELOPER_RESOURCES = {
  email: "support@kovrinsolutions.com",
  instagram: "https://www.instagram.com/kovrinsoftwaresolutions?igsh=eHU1YXAzanptMDNo",
  linkedin: "https://www.linkedin.com/company/kovrinsoftwaresolutions/",
};

export const FLUTTER_CODE_FILES: FlutterFile[] = [
  {
    name: "pubspec.yaml",
    path: "pubspec.yaml",
    language: "yaml",
    content: `name: kovrin_software_solutions
description: A stunning portfolio and inquiry web app for Kovrin Software Solutions.
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  
  # Icons & design
  cupertino_icons: ^1.0.5
  google_fonts: ^6.1.0
  flutter_svg: ^2.0.7
  
  # Firebase requirements for inquiry storage
  firebase_core: ^2.24.0
  cloud_firestore: ^4.14.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^2.0.1

flutter:
  uses-material-design: true
  assets:
    # If you have a logo image, register its path here
    # - assets/logo.png
`
  },
  {
    name: "constants.dart",
    path: "lib/constants.dart",
    language: "dart",
    content: `import 'package:flutter/material.dart';

class AppConstants {
  // Brand Aesthetic Configuration
  static const Color backgroundColor = Color(0xFF060A08); // Deep minimalist green-tinted black
  static const Color cardColor = Color(0xFF0B120F); // Matching dark card background
  static const Color primaryAccent = Color(0xFF5CB85C); // Futuristic neon green
  static const Color secondaryAccent = Color(0xFFE2B13C); // Warm amber-yellow / gold
  static const Color textMain = Color(0xFFE2E8F0); // Off-white text
  static const Color textMuted = Color(0xFF94A3B8); // Slate descriptions
  
  // Customizable Social Channels
  static const String contactEmail = "info@kovrin.com";
  static const String instagramUrl = "https://instagram.com/kovrin.software";
  static const String linkedinUrl = "https://linkedin.com/company/kovrin";
}
`
  },
  {
    name: "main.dart",
    path: "lib/main.dart",
    language: "dart",
    content: `import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:firebase_core/firebase_core.dart';
import 'constants.dart';
import 'section_hero.dart';
import 'section_about.dart';
import 'section_services.dart';
import 'section_contact.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  // IMPORTANT: Initialize Firebase
  // Note: Fill in your actual Web App Config credentials in index.html,
  // or pass options programmatically as demonstrated in the setup instructions tab.
  try {
    await Firebase.initializeApp(
      // options: FirebaseOptions(
      //   apiKey: "YOUR_API_KEY",
      //   appId: "YOUR_APP_ID",
      //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      //   projectId: "YOUR_PROJECT_ID",
      // ),
    );
  } catch (e) {
    debugPrint("Firebase init log: \${e.toString()}");
  }

  runApp(const KovrinApp());
}

class KovrinApp extends StatelessWidget {
  const KovrinApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kovrin Software Solutions',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: AppConstants.backgroundColor,
        textTheme: GoogleFonts.interTextTheme(ThemeData.dark().textTheme).copyWith(
          displayLarge: GoogleFonts.outfit(
            color: AppConstants.textMain,
            fontWeight: FontWeight.w800,
          ),
          bodyLarge: GoogleFonts.inter(
            color: AppConstants.textMuted,
            fontSize: 16,
          ),
        ),
      ),
      home: const MainScrollingPage(),
    );
  }
}

class MainScrollingPage extends StatefulWidget {
  const MainScrollingPage({Key? key}) : super(key: key);

  @override
  State<MainScrollingPage> createState() => _MainScrollingPageState();
}

class _MainScrollingPageState extends State<MainScrollingPage> {
  final ScrollController _scrollController = ScrollController();
  
  // Scroll threshold to determine sticky header background intensity
  double _scrollProgress = 0.0;

  // Key array to navigate sections
  final GlobalKey _heroKey = GlobalKey();
  final GlobalKey _aboutKey = GlobalKey();
  final GlobalKey _servicesKey = GlobalKey();
  final GlobalKey _contactKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(() {
      setState(() {
        _scrollProgress = (_scrollController.offset / 300).clamp(0.0, 1.0);
      });
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollToSection(GlobalKey key) {
    final context = key.currentContext;
    if (context != null) {
      Scrollable.ensureVisible(
        context,
        duration: const Duration(milliseconds: 700),
        curve: Curves.easeInOutCubic,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    final bool isMobile = width < 768;

    return Scaffold(
      body: Stack(
        children: [
          // Background Matrix Accent glow
          Positioned.fill(
            child: Container(
              decoration: const BoxDecoration(
                radialGradient: RadialGradient(
                  center: Alignment.topCenter,
                  colors: [
                    Color(0xFF0B1C14),
                    AppConstants.backgroundColor,
                  ],
                  radius: 1.2,
                ),
              ),
            ),
          ),
          
          // Main Scroll View
          ListView(
            controller: _scrollController,
            children: [
              HeroSection(key: _heroKey, onGetStarted: () => _scrollToSection(_contactKey)),
              AboutSection(key: _aboutKey),
              ServicesSection(key: _servicesKey),
              ContactSection(key: _contactKey),
            ],
          ),

          // Sticky Elegant Header Toolbar
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              color: AppConstants.backgroundColor.withOpacity(_scrollProgress * 0.95),
              padding: EdgeInsets.symmetric(
                horizontal: isMobile ? 16 : 48,
                vertical: 20 - (_scrollProgress * 4),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  // Logo Title
                  Row(
                    children: [
                      _buildMiniHexagon(),
                      const SizedBox(width: 12),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'KOVRIN',
                            style: GoogleFonts.playfairDisplay(
                              fontSize: isMobile ? 18 : 22,
                              fontWeight: FontWeight.bold,
                              letterSpacing: 1.5,
                              color: AppConstants.secondaryAccent,
                            ),
                          ),
                          Text(
                            'SOFTWARE SOLUTIONS',
                            style: GoogleFonts.inter(
                              fontSize: isMobile ? 8 : 9,
                              fontWeight: FontWeight.w500,
                              letterSpacing: 2.0,
                              color: Colors.white60,
                            ),
                          ),
                        ],
                      )
                    ],
                  ),
                  
                  // Nav Anchors
                  if (!isMobile)
                    Row(
                      children: [
                        _buildNavButton("Home", () => _scrollToSection(_heroKey)),
                        _buildNavButton("About", () => _scrollToSection(_aboutKey)),
                        _buildNavButton("Services", () => _scrollToSection(_servicesKey)),
                        _buildNavButton("Contact", () => _scrollToSection(_contactKey)),
                      ],
                    )
                  else
                    PopupMenuButton<int>(
                      icon: const Icon(Icons.menu, color: AppConstants.primaryAccent),
                      color: AppConstants.cardColor,
                      onSelected: (value) {
                        if (value == 0) _scrollToSection(_heroKey);
                        if (value == 1) _scrollToSection(_aboutKey);
                        if (value == 2) _scrollToSection(_servicesKey);
                        if (value == 3) _scrollToSection(_contactKey);
                      },
                      itemBuilder: (context) => [
                        const PopupMenuItem(value: 0, child: Text("Home")),
                        const PopupMenuItem(value: 1, child: Text("About")),
                        const PopupMenuItem(value: 2, child: Text("Services")),
                        const PopupMenuItem(value: 3, child: Text("Contact")),
                      ],
                    ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNavButton(String label, VoidCallback onPressed) {
    return TextButton(
      onPressed: onPressed,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Text(
          label,
          style: GoogleFonts.inter(
            color: AppConstants.textMain,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }

  Widget _buildMiniHexagon() {
    return Container(
      width: 32,
      height: 32,
      decoration: BoxDecoration(
        shape: BoxShape.rectangle,
        border: Border.all(color: AppConstants.primaryAccent, width: 2),
        borderRadius: BorderRadius.circular(4),
      ),
      alignment: Alignment.center,
      child: const Icon(
        Icons.code,
        size: 16,
        color: AppConstants.secondaryAccent,
      ),
    );
  }
}
`
  },
  {
    name: "section_hero.dart",
    path: "lib/section_hero.dart",
    language: "dart",
    content: `import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'constants.dart';

class HeroSection extends StatelessWidget {
  final VoidCallback onGetStarted;

  const HeroSection({Key? key, required this.onGetStarted}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    final bool isMobile = width < 768;

    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: isMobile ? 20 : 80,
        vertical: isMobile ? 120 : 200,
      ),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // Badge
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                decoration: BoxDecoration(
                  border: Border.all(color: AppConstants.primaryAccent.withOpacity(0.3)),
                  borderRadius: BorderRadius.circular(20),
                  color: AppConstants.primaryAccent.withOpacity(0.05),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      width: 8,
                      height: 8,
                      decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        color: AppConstants.primaryAccent,
                      ),
                    ),
                    const SizedBox(width: 8),
                    Text(
                      "Pioneering Industrial Software",
                      style: GoogleFonts.inter(
                        fontSize: 12,
                        fontWeight: FontWeight.w600,
                        color: AppConstants.primaryAccent,
                        letterSpacing: 1.0,
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 32),
              
              // Big Title
              RichText(
                textAlign: TextAlign.center,
                text: TextSpan(
                  style: GoogleFonts.outfit(
                    fontSize: isMobile ? 38 : 64,
                    height: 1.15,
                    fontWeight: FontWeight.w800,
                    color: AppConstants.textMain,
                  ),
                  children: [
                    const TextSpan(text: "Architecting Web and App\\n"),
                    TextSpan(
                      text: "Digital Solutions",
                      style: TextStyle(
                        color: AppConstants.primaryAccent,
                      ),
                    ),
                    const TextSpan(text: " at Scale"),
                  ],
                ),
              ),
              const SizedBox(height: 24),
              
              // Description
              Text(
                "We design and build ultra-reliable, beautifully animated custom web and mobile environments that drive user engagement and secure transactions worldwide.",
                textAlign: TextAlign.center,
                style: GoogleFonts.inter(
                  color: AppConstants.textMuted,
                  fontSize: isMobile ? 15 : 18,
                  height: 1.6,
                ),
              ),
              const SizedBox(height: 48),
              
              // Main Action Buttons
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    onPressed: onGetStarted,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppConstants.primaryAccent,
                      foregroundColor: AppConstants.backgroundColor,
                      padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 20),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                      elevation: 4,
                    ),
                    child: Text(
                      "Start Your Inquiry",
                      style: GoogleFonts.inter(fontWeight: FontWeight.bold, fontSize: 16),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
`
  },
  {
    name: "section_about.dart",
    path: "lib/section_about.dart",
    language: "dart",
    content: `import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'constants.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    final bool isMobile = width < 768;

    return Container(
      color: AppConstants.cardColor.withOpacity(0.3),
      padding: EdgeInsets.symmetric(
        horizontal: isMobile ? 20 : 80,
        vertical: 100,
      ),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: isMobile 
            ? Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: _buildContent(context, isMobile),
              )
            : Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Expanded(
                    flex: 6,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: _buildContent(context, isMobile),
                    ),
                  ),
                  const SizedBox(width: 80),
                  Expanded(
                    flex: 4,
                    child: _buildGraphic(context),
                  ),
                ],
              ),
        ),
      ),
    );
  }

  List<Widget> _buildContent(BuildContext context, bool isMobile) {
    return [
      Text(
        "WHO WE ARE",
        style: GoogleFonts.inter(
          fontSize: 13,
          fontWeight: FontWeight.bold,
          letterSpacing: 2.0,
          color: AppConstants.secondaryAccent,
        ),
      ),
      const SizedBox(height: 16),
      Text(
        "Kovrin Software Solutions",
        style: Theme.of(context).textTheme.displayLarge?.copyWith(
          fontSize: isMobile ? 28 : 42,
        ),
      ),
      const SizedBox(height: 24),
      Text(
        "We are an agile boutique engineering agency dedicated to helping progressive enterprises and venture-backed startups structure high-performance web backends, responsive custom dashboards, and cross-platform native applications.",
        style: GoogleFonts.inter(
          color: AppConstants.textMain,
          fontSize: 16,
          height: 1.6,
        ),
      ),
      const SizedBox(height: 16),
      Text(
        "Focused purely on clean-code, scalable server schemas, and rich interactive web experiences, we bridge the gap between creative visual design and bulletproof corporate database engineering.",
        style: GoogleFonts.inter(
          color: AppConstants.textMuted,
          fontSize: 15,
          height: 1.6,
        ),
      ),
    ];
  }

  Widget _buildGraphic(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: AppConstants.backgroundColor,
        border: Border.all(color: AppConstants.primaryAccent.withOpacity(0.2)),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        children: [
          _buildInfoRow("Engine Speed", "99+", "Lighthouse Rating"),
          const Divider(color: Colors.white12, height: 32),
          _buildInfoRow("Latency", "<80ms", "Server response time"),
          const Divider(color: Colors.white12, height: 32),
          _buildInfoRow("Availability", "99.99%", "Continuous uptime"),
        ],
      ),
    );
  }

  Widget _buildInfoRow(String title, String mainValue, String subValue) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: GoogleFonts.inter(fontSize: 14, color: AppConstants.textMain)),
            Text(subValue, style: GoogleFonts.inter(fontSize: 12, color: AppConstants.textMuted)),
          ],
        ),
        Text(
          mainValue,
          style: GoogleFonts.outfit(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: AppConstants.primaryAccent,
          ),
        )
      ],
    );
  }
}
`
  },
  {
    name: "section_services.dart",
    path: "lib/section_services.dart",
    language: "dart",
    content: `import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'constants.dart';

class ServiceData {
  final String title;
  final String desc;
  final IconData icon;

  ServiceData(this.title, this.desc, this.icon);
}

class ServicesSection extends StatelessWidget {
  ServicesSection({Key? key}) : super(key: key);

  final List<ServiceData> services = [
    ServiceData("Custom Website Development", "Bespoke, blazingly fast websites built using modern cutting-edge layout models.", Icons.language),
    ServiceData("E-commerce App Development", "Highly scalable digital stores with optimized search indexing and custom gateways.", Icons.shopping_cart),
    ServiceData("UI/UX Design", "Intuitive, high-fidelity responsive user checkouts designed with geometric harmony.", Icons.design_services),
    ServiceData("Web App Development", "Immersive full-stack software applications featuring seamless client rendering.", Icons.apps),
    ServiceData("Backend & API Development", "Secure, micro-latency server-side architectures and high-concurrency handling.", Icons.dns),
    ServiceData("Admin Dashboard Development", "Clean analytical interfaces featuring dense telemetry representations and logs.", Icons.assessment),
    ServiceData("SEO & Performance Optimization", "Precision auditing and design structures to attain clean Lighthouse scores.", Icons.speed),
    ServiceData("Brand Identity & Logo Design", "Cohesive visual narratives incorporating typography guidelines and vector marks.", Icons.brush),
    ServiceData("Website Redesign", "Modernizing legacy structures into mobile-responsive assets with zero traffic leaks.", Icons.update),
    ServiceData("Maintenance & Support", "Proactive runtime monitoring, server optimization, and dependency updates.", Icons.construction),
    ServiceData("CMS Development", "Empowering writers with Headless CMS, custom schemas, and visual workspaces.", Icons.article),
    ServiceData("Payment & Third-party Integration", "Secure Checkout processing and payment logs for high-trust reliability.", Icons.credit_card),
    ServiceData("Startup & MVP Development", "Rapidly validating ideas with focused scope modules and lean production cycles.", Icons.rocket_launch),
    ServiceData("Technical Consulting", "Strategic planning for high-availability cloud setups and deployment tools.", Icons.psychology),
    ServiceData("AI Automation", "Replacing laborious data entry tasks with automated smart visual pipelines.", Icons.auto_awesome),
    ServiceData("AI Agents", "Autonomous chatbot agents responding to database values and client needs.", Icons.smart_toy),
  ];

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    final bool isMobile = width < 768;
    final int crossAxisCount = isMobile ? 1 : (width < 1100 ? 2 : 3);

    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: isMobile ? 20 : 80,
        vertical: 100,
      ),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "OUR EXPERTISE",
                style: GoogleFonts.inter(
                  fontSize: 13,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 2.0,
                  color: AppConstants.primaryAccent,
                ),
              ),
              const SizedBox(height: 16),
              Text(
                "Technical Scope & Services",
                style: Theme.of(context).textTheme.displayLarge?.copyWith(
                  fontSize: isMobile ? 28 : 36,
                ),
              ),
              const SizedBox(height: 48),
              
              // Grid View
              GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: services.length,
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: crossAxisCount,
                  crossAxisSpacing: 20,
                  mainAxisSpacing: 20,
                  mainAxisExtent: 180,
                ),
                itemBuilder: (context, index) {
                  final service = services[index];
                  return Container(
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(
                      color: AppConstants.cardColor,
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(
                        color: AppConstants.primaryAccent.withOpacity(0.1),
                        width: 1,
                      ),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Icon(service.icon, color: AppConstants.secondaryAccent, size: 28),
                        const SizedBox(height: 16),
                        Text(
                          service.title,
                          style: GoogleFonts.inter(
                            color: AppConstants.textMain,
                            fontWeight: FontWeight.bold,
                            fontSize: 16,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Expanded(
                          child: Text(
                            service.desc,
                            style: GoogleFonts.inter(
                              color: AppConstants.textMuted,
                              fontSize: 13,
                              height: 1.4,
                            ),
                          ),
                        ),
                      ],
                    ),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
`
  },
  {
    name: "section_contact.dart",
    path: "lib/section_contact.dart",
    language: "dart",
    content: `import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'constants.dart';

class ContactSection extends StatefulWidget {
  const ContactSection({Key? key}) : super(key: key);

  @override
  State<ContactSection> createState() => _ContactSectionState();
}

class _ContactSectionState extends State<ContactSection> {
  final _formKey = GlobalKey<FormState>();
  
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _descController = TextEditingController();

  bool _isSubmitting = false;

  @override
  void dispose() {
    _nameController.dispose();
    _phoneController.dispose();
    _emailController.dispose();
    _descController.dispose();
    super.dispose();
  }

  Future<void> _handleSubmit() async {
    if (!_formKey.currentState!.validate()) return;
    
    setState(() { _isSubmitting = true; });

    try {
      // Writes straight to the 'inquiries' collection in Cloud Firestore as specified
      await FirebaseFirestore.instance.collection('inquiries').add({
        'name': _nameController.text.trim(),
        'contactNumber': _phoneController.text.trim(),
        'email': _emailController.text.trim(),
        'description': _descController.text.trim(),
        'createdAt': FieldValue.serverTimestamp(),
      });

      // Clear fields
      _nameController.clear();
      _phoneController.clear();
      _emailController.clear();
      _descController.clear();

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            "Inquiry registered perfectly! Our technical team will follow up soon.",
            style: GoogleFonts.inter(color: Colors.white, fontWeight: FontWeight.bold),
          ),
          backgroundColor: AppConstants.primaryAccent,
        )
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Error submitting: \${e.toString()}"),
          backgroundColor: Colors.redAccent,
        )
      );
    } finally {
      setState(() { _isSubmitting = false; });
    }
  }

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    final bool isMobile = width < 768;

    return Container(
      color: AppConstants.cardColor.withOpacity(0.1),
      padding: EdgeInsets.symmetric(
        horizontal: isMobile ? 20 : 80,
        vertical: 100,
      ),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: isMobile
            ? Column(
                children: [
                  _buildSocialContainer(isMobile),
                  const SizedBox(height: 48),
                  _buildFormContainer(),
                ],
              )
            : Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(flex: 5, child: _buildSocialContainer(isMobile)),
                  const SizedBox(width: 80),
                  Expanded(flex: 7, child: _buildFormContainer()),
                ],
              ),
        ),
      ),
    );
  }

  Widget _buildSocialContainer(bool isMobile) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          "GET IN TOUCH",
          style: GoogleFonts.inter(
            fontSize: 13,
            fontWeight: FontWeight.bold,
            letterSpacing: 2.0,
            color: AppConstants.secondaryAccent,
          ),
        ),
        const SizedBox(height: 16),
        Text(
          "Let's Build Something High-Performance",
          style: GoogleFonts.outfit(
            fontSize: isMobile ? 28 : 36,
            fontWeight: FontWeight.bold,
            color: AppConstants.textMain,
          ),
        ),
        const SizedBox(height: 24),
        Text(
          "Have an engineering requirement or looking to prototype an MVP? Complete our inquiry roster. Our lead solutions architect will evaluate and schedule an introductory session within 24 hours.",
          style: GoogleFonts.inter(color: AppConstants.textMuted, fontSize: 15, height: 1.6),
        ),
        const SizedBox(height: 40),
        
        // Links
        _buildSocialLink("Email us directly", AppConstants.contactEmail, Icons.email),
        const SizedBox(height: 16),
        _buildSocialLink("Instagram", "kovrin.software", Icons.camera_alt),
        const SizedBox(height: 16),
        _buildSocialLink("LinkedIn", "Kovrin Software Solutions", Icons.link),
      ],
    );
  }

  Widget _buildSocialLink(String label, String value, IconData icon) {
    return Row(
      children: [
        Icon(icon, color: AppConstants.primaryAccent, size: 24),
        const SizedBox(width: 16),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label, style: GoogleFonts.inter(fontSize: 12, color: AppConstants.textMuted)),
            Text(value, style: GoogleFonts.inter(fontSize: 14, color: AppConstants.textMain, fontWeight: FontWeight.bold)),
          ],
        )
      ],
    );
  }

  Widget _buildFormContainer() {
    return Container(
      padding: const EdgeInsets.all(32),
      decoration: BoxDecoration(
        color: AppConstants.cardColor,
        border: Border.all(color: AppConstants.primaryAccent.withOpacity(0.15)),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Form(
        key: _formKey,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "Solutions Inquiry Form",
              style: GoogleFonts.outfit(fontSize: 20, fontWeight: FontWeight.bold, color: AppConstants.textMain),
            ),
            const SizedBox(height: 24),
            _buildTextField("Your Name", _nameController, "Name is required"),
            const SizedBox(height: 20),
            _buildTextField("Contact Number", _phoneController, "Contact number is required"),
            const SizedBox(height: 20),
            _buildTextField("Email Address", _emailController, "Valid email is required", isEmail: true),
            const SizedBox(height: 20),
            _buildTextField("Description of Services Required", _descController, "Please describe your engineering requirements", maxLines: 4),
            const SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              height: 52,
              child: ElevatedButton(
                onPressed: _isSubmitting ? null : _handleSubmit,
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppConstants.primaryAccent,
                  foregroundColor: AppConstants.backgroundColor,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                ),
                child: _isSubmitting
                  ? const CircularProgressIndicator(color: AppConstants.backgroundColor)
                  : Text("Transmit Inquiry", style: GoogleFonts.inter(fontWeight: FontWeight.bold, fontSize: 16)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTextField(String label, TextEditingController controller, String validationMsg, {bool isEmail = false, int maxLines = 1}) {
    return TextFormField(
      controller: controller,
      maxLines: maxLines,
      style: GoogleFonts.inter(color: AppConstants.textMain),
      decoration: InputDecoration(
        labelText: label,
        labelStyle: GoogleFonts.inter(color: AppConstants.textMuted),
        filled: true,
        fillColor: AppConstants.backgroundColor,
        enabledBorder: OutlineInputBorder(
          borderSide: BorderSide(color: AppConstants.primaryAccent.withOpacity(0.1)),
          borderRadius: BorderRadius.circular(8),
        ),
        focusedBorder: OutlineInputBorder(
          borderSide: const BorderSide(color: AppConstants.primaryAccent),
          borderRadius: BorderRadius.circular(8),
        ),
        errorBorder: OutlineInputBorder(
          borderSide: const BorderSide(color: Colors.redAccent),
          borderRadius: BorderRadius.circular(8),
        ),
        focusedErrorBorder: OutlineInputBorder(
          borderSide: const BorderSide(color: Colors.redAccent, width: 2),
          borderRadius: BorderRadius.circular(8),
        ),
      ),
      validator: (value) {
        if (value == null || value.trim().isEmpty) {
          return validationMsg;
        }
        if (isEmail && !RegExp(r'^[^@]+@[^@]+\\.[^@]+').hasMatch(value.trim())) {
          return "Please enter a valid email address";
        }
        return null;
      },
    );
  }
}
`
  }
];
