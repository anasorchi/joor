import 'package:flutter/material.dart';
import 'login.dart'; // Assuming your LoginPage widget is in a separate file named login_page.dart

void main() {
  runApp(MyApp());
}
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Login App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // Define the initial route to your LoginPage
      initialRoute: '/',
      routes: {
        '/': (context) => LoginPage(),
        // Add more routes if needed
      },
    );
  }
}
