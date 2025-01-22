import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../store/CounterSlice";
import { useState } from "react";
import audioFile from '../assets/do-not-redeem-the-card-made-with-Voicemod.mp3';
import cardImage from '../assets/card.png';
import rakesh from '../assets/call-us-6.png';
import { useForm } from "react-hook-form";
import skype from '../assets/skype.mp3';

export default function Homepage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const [showImages, setShowImages] = useState(false); // Stato per gestire la visibilità delle immagini
  
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleNumber = (e) => {
    setNumber(+e.target.value);
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(number));
  };

  // Funzione per riprodurre il primo audio
  const playAudio = () => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  // Funzione per riprodurre il secondo audio (Skype)
  const playSkype = () => {
    const audio = new Audio(skype);
    audio.play();
  };

  // Hook per il modulo
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Funzione per invio modulo
  const onSubmit = (data) => {
    console.log(data);
    playSkype(); // Riproduce l'audio di Skype quando si invia il modulo

    // Mostra le immagini con un ritardo di 4 secondi
    setTimeout(() => {
      setShowImages(true);
    }, 4000);
  };

  return (
    <>
      <div className="container">
        <div className="container bg-[url('../assets/ufficio.jpg')] bg-cover h-full min-h-screen p-8">
          <h1 className="text-3xl font-bold underline hover:bg-sky-700 md:text-[rgb(255, 179, 0)] text-red-500">
            Modulo di richiesta rimborso
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Sezione Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Quante carte vuoi?</h2>
              <button
                id="decrement"
                onClick={handleDecrement}
                className="px-4 py-2 bg-red-500 text-white rounded-lg mr-4"
              >
                -1
              </button>
              <button
                id="increment"
                onClick={handleIncrement}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                +1
              </button>
              <span>
                <p className="font-bold">{count} carte</p>
              </span>
                <div className="mt-4">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                    {errors.name?.type === 'required' && (
                        <p role="alert"> Nome non presente o valido</p>
                    )}
                        {errors.name?.type === 'maxLength' && (
                            <p role="alert"> Il nome deve avere massimo 30 caratteri</p>
                        )}
                    <input
                        type="name"
                        className="border border-gray-300 rounded-lg p-2 w-full my-3"
                        {...register("name", {required: true, maxLength:30})} aria-invalid={errors.name ? 'true' : 'false'}
                        placeholder="nome"/>
                    <div>
                    {errors.email?.type === 'required' && (
                            <p role="alert"> Email non presente o valida</p>
                    )}
                        <input
                        type="email"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        {...register("email", {required: true})} aria-invalid={errors.email ? 'true' : 'false'}
                        placeholder="email"/>
                    </div>
                    <button
                        type="submit"
                        className="bg-black my-3 py-3 px-3 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                    >
                        Richiedi {count} carte
                    </button>
                    </form>
                </div>
            </div>

            {/* Sezione Bottone con Immagini */}
            {showImages && (
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                    <h1 className="italic font-bold underline-offset-4 py-3">
                        Sei collegato con il nostro operatore: Rakesh
                    </h1>
                    <button
                    onClick={playAudio}
                    className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4">
                    Aggiungi le carte al carrello!
                    </button>
                    <img src={rakesh} alt="Rakesh" className="max-w-full max-h-64 mb-4" />
                    <img src={cardImage} alt="card" className="max-w-full max-h-64" />
                    <audio
                    src="../assets/do-not-redeem-the-card-made-with-Voicemod.mp3"
                    preload="auto">
                        
                    </audio>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
