<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TopUpController extends Controller
{
    public function goToTopUpPage(){
        $user = Auth::user();
        return view('customer-page.top-up', compact('user'));
    }

    public function topUp(Request $request){
        $request->validate([
            'e_money' => ['required', 'numeric', 'gt:0', 'lt:10000000000'],
        ]);
        $user = Auth::user();

        if ($request->e_money + $user->e_money >= 10000000000) {
            return redirect()->back()->withErrors(['e_money' => 'Your balance cannot be more than 9 digits.'])->withInput();
        }
        $user = User::find($user->id);
        $user->e_money += $request->e_money;
        $user->save();
    
        return redirect('/home');
    }
}
