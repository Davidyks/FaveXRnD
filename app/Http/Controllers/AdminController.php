<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function goToAdminPanel(){
        $products = Product::all();
        return view('admin-panel', compact('products'));
    }

    public function delete($id){
        Product::destroy($id);
        return redirect('/admin-panel');
    }
}
