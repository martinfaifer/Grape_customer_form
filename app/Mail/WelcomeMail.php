<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(public string $email, public string $password, public string $subjectEmail)
    {
        //
    }

    public function build()
    {
        return $this->from("formular@grapesc.cz")
            ->markdown('SendWelcomeMail')
            ->subject($this->subjectEmail);
    }
}
