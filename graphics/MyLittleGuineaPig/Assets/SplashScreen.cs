using UnityEngine;
using System.Collections;

public class SplashScreen : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GuineaPig.Health = new PigHealthProperty();
		GuineaPig.Cuteness = new PigCutenessProperty();
		GuineaPig.Mood = new PigMoodProperty();
		GuineaPig.Fullness = new PigFullnessProperty();
		GuineaPig.Radioactivity = new PigRadioactivityProperty();
		GuineaPig.Genpurity = new PigPurityOfGenProperty();
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void LoadGame() {
		Application.LoadLevel("Stage1");
	}
}
