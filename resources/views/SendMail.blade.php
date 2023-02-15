@component('mail::message')
    {!! $customer->name !!} {!! $customer->surname !!}

    Adresa: {!! $customer->street !!} , {!! $customer->city !!} , {!! $customer->post_code !!}


    Narození: {!! $customer->birthday !!}
    Telefon: {!! $customer->telephone !!}
    Email: {!! $customer->email !!}
    Služba: {!! $customer->service !!}
    Poznámka: {!! $customer->note !!}
@endcomponent
