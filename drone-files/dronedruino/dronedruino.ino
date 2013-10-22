#define echoPin 7 // Echo Pin
#define trigPin 8 // Trigger Pin

int maximumRange = 200; // Maximum range needed
int minimumRange = 0; // Minimum range needed
long duration, distance; // Duration used to calculate distance
int heartBeat = 100;
int beatCount = 0;

void setup() {
 Serial.begin (9600);
 pinMode(trigPin, OUTPUT);
 pinMode(echoPin, INPUT);
}

void loop() {
/* The following trigPin/echoPin cycle is used to determine the
 distance of the nearest object by bouncing soundwaves off of it. */
 digitalWrite(trigPin, LOW); 
 delayMicroseconds(2); 

 digitalWrite(trigPin, HIGH);
 delayMicroseconds(10); 
 
 digitalWrite(trigPin, LOW);
 duration = pulseIn(echoPin, HIGH);
 
 //Calculate the distance (in cm) based on the speed of sound.
 distance = duration/58.2;
 
 // If in range, send it down the line.
 if (distance >= minimumRange && distance <= maximumRange){
    Serial.println(distance);
 }

 // Simple heartbeat so you know we're alive!
 beatCount++;
 if (beatCount > heartBeat) {
   beatCount = 0;
   Serial.println("ping");
 }
 
 //Delay 50ms before next reading.
 delay(50);
}
