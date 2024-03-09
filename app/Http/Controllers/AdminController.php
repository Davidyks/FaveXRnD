<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function goToAdminPanel(){
        return view('admin-panel');
    }

    public function getProduct()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request){
        $request->validate([

        ]);

    }

    public function update(Request $request, $id){
        $request->validate([

        ]);
    }

    public function delete($id){
        Product::destroy($id);
        return redirect('/admin-panel');
    }
}
