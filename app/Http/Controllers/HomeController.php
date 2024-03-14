<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class HomeController extends Controller
{

    public function getHomePage(){
        $datas = Product::all();
        $onsales = $datas->sortBy('price');
        $newests = $datas->sortByDesc('created_at'); 
        $others = $datas;

        return view('home', compact('onsales', 'newests', 'others'));
    }


    public function search(Request $request)
    {
        $searchTerm = $request->category; 

        $datas = Product::query();

        $others = new Collection();

        if ($searchTerm !== 'all') {
            $datas = $datas->where('name', 'like', '%' . $searchTerm . '%')
                ->orWhere('description', 'like', '%' . $searchTerm . '%')
                ->get();
            $others = Product::whereNot('name', 'like', '%' . $searchTerm . '%')
                    ->WhereNot('description', 'like', '%' . $searchTerm . '%')
                    ->get();
        } else {
            $datas = $datas->get();
            $others = $datas;
        }

        $onsales = $datas->sortBy('price');
        $newests = $datas->sortByDesc('created_at'); 

        return view('home', compact('onsales', 'newests', 'others'));
    }
}
