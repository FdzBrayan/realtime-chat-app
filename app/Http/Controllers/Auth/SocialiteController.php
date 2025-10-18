<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;


class SocialiteController extends Controller
{
    // Redirigir a Google
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    // Callback de Google
    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
           
            $user = User::updateOrCreate(
                ['email' => $googleUser->email],
                [
                    'name' => $googleUser->name,
                    'google_id' => $googleUser->id,
                    'password' => Hash::make(Str::random(24)),
                ]
            );


            Auth::login($user);
            return redirect()->intended('dashboard');


        } catch (\Exception $e) {
            return redirect('/login')->with('error', 'Error al iniciar sesión con Google');
        }
    }


    // Redirigir a Facebook
    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }


    // Callback de Facebook
    public function handleFacebookCallback()
    {
        try {
            $facebookUser = Socialite::driver('facebook')->user();
           
            $user = User::updateOrCreate(
                ['email' => $facebookUser->email],
                [
                    'name' => $facebookUser->name,
                    'facebook_id' => $facebookUser->id,
                    'password' => Hash::make(Str::random(24)),
                ]
            );


            Auth::login($user);
            return redirect()->intended('dashboard');


        } catch (\Exception $e) {
            return redirect('/login')->with('error', 'Error al iniciar sesión con Facebook');
        }
    }
}
