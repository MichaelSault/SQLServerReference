SELECT * FROM TrainerStats INNER JOIN GameplayMedals ON TrainerStats.EntryID = GameplayMedals.EntryID 
INNER JOIN TypeMedals ON GameplayMedals.EntryID = TypeMedals.EntryID WHERE TrainerStats.TrainerID = 1045
ORDER BY TrainerStats.Date