import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = () => {
        // Handle login logic here
        // You can also add error handling
        // setError('Invalid email or password');
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Login to your account</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#666"
                    value={email}
                    onChangeText={setEmail}

                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#666"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {error && <Text style={styles.error}>{error}</Text>}
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.link}><Link href={'/signup'} style={styles.link}>Don't have an account? Sign up</Link></Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
        color: '#666',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    error: {
        color: 'red',
        marginBottom: 12,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 16,
        color: '#007bff',
        textAlign: 'center',
    },
});